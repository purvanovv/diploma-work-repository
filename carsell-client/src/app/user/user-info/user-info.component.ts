import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from '@app/@core/until-destroyed';
import { NotificationService } from '@app/@shared';
import { CredentialsService } from '@app/auth';
import { finalize, tap } from 'rxjs/operators';
import { UserInfo } from '../user.models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  userInfoForm!: FormGroup;
  isLoading = false;
  isInit = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnDestroy() {}

  ngOnInit(): void {
    const userId = this.credentialsService.credentials.userId;
    this.userService
      .getUserInfo(userId)
      .pipe(
        tap((userInfo: UserInfo) => {
          console.log(userInfo);
          this.createForm(userInfo);
        }),
        finalize(() => {
          this.isInit = true;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  editUserInfo() {
    this.isLoading = true;
    this.userService
      .editUserInfo(this.userInfoForm.value)
      .pipe(
        finalize(() => {
          this.userInfoForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.notificationService.success('Потребителските данни бяха запазени успешно.');
        this.router.navigate(['/home'], { replaceUrl: true });
      });
  }

  private createForm(userInfo: UserInfo) {
    this.userInfoForm = this.formBuilder.group({
      id: [userInfo.id, [Validators.required]],
      username: [{ value: userInfo.username, disabled: true }],
      email: [userInfo.email, [Validators.required, Validators.email]],
      firstName: [userInfo.firstName, [Validators.required]],
      lastName: [userInfo.lastName, [Validators.required]],
      telephone: [userInfo.telephone, [Validators.required]],
      userId: [userInfo.userId, [Validators.required]],
    });
  }
}

import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { NotificationService } from '@app/@shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  logout() {
    this.authenticationService.logout().subscribe(() => {
      this.notificationService.success('Излязохте успешно');
      this.router.navigate(['/home'], { replaceUrl: true });
    });
  }

  isAuthenticated() {
    return this.credentialsService.isAuthenticated();
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  home() {
    this.router.navigate(['home']);
  }

  createAnnouncementOrLogin() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/announcement/create']);
    } else {
      this.router.navigate(['/user/login']);
    }
  }
}

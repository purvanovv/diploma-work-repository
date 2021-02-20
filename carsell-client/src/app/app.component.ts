import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ErrorModalNotificationData,
  NotificationDataModel,
  NotificationService,
  SnackBarComponent,
  SnackBarNotificationData,
} from './@shared';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from './@shared/notification/error-modal/error-modal.component';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private notificationService: NotificationService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog
  ) {}

  ngOnDestroy() {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    this.notificationService
      .notification$()
      .pipe(untilDestroyed(this))
      .subscribe((notification: NotificationDataModel) => {
        if (notification instanceof ErrorModalNotificationData) {
          this.matDialog.open(ErrorModalComponent, {
            data: notification,
          });
        } else if (notification instanceof SnackBarNotificationData) {
          this.matSnackBar.openFromComponent(SnackBarComponent, {
            duration: 1000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            data: notification,
            panelClass: [notification.panelClass],
          });
        }
      });
  }
}

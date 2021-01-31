import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { NotificationService } from './@shared/notification/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationData } from './@shared/notification/notification.models';
import { SnackBarComponent } from './@shared';



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
    private matSnackBar: MatSnackBar) { }

  ngOnDestroy() { }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    this.notificationService.notification$()
      .pipe(untilDestroyed(this))
      .subscribe((notification: NotificationData) => {
        if (notification !== undefined) {
          console.log(notification);
          this.matSnackBar.openFromComponent(
            SnackBarComponent, {
            duration: 1000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            data: notification,
            panelClass: [notification.panelClass]
          }
          )
        }

      })
  }
}

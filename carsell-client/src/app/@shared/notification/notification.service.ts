import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ErrorModalNotificationData,
  NotificationData,
  NotificationType,
  SnackBarNotificationData,
} from './notification.models';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly _notification = new BehaviorSubject<NotificationData>(undefined);

  constructor() {}

  private get notification(): NotificationData {
    return this._notification.getValue();
  }

  private set notification(notification: NotificationData) {
    this._notification.next(notification);
  }

  public notification$(): Observable<NotificationData> {
    return this._notification.asObservable();
  }

  public success(message: string) {
    this.notification = new SnackBarNotificationData('success-snackbar', 'done', NotificationType.SUCESS, message);
  }
  public businessError(message: string) {
    this.notification = new SnackBarNotificationData(
      'error-snackbar',
      'error',
      NotificationType.BUSINESS_ERROR,
      message
    );
  }
  public technicalError(message: string, errorCode: string, title: string) {
    this.notification = new ErrorModalNotificationData(errorCode, NotificationType.TECHNICAL_ERROR, message, title);
  }
}

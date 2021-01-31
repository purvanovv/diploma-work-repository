import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationData, NotificationDataModel, NotificationType } from './notification.models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly _notification = new BehaviorSubject<NotificationData>(undefined);

  constructor() { }

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
    this.notification = new NotificationDataModel(message, NotificationType.SUCESS, 'success-snackbar', 'done');
  }
  public error(message: string) {
    this.notification = new NotificationDataModel(message, NotificationType.ERROR, 'error-snackbar', 'error');
  }
}

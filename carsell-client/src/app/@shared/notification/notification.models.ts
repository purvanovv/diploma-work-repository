export enum NotificationType {
  BUSINESS_ERROR,
  TECHNICAL_ERROR,
  SUCESS,
}

export interface NotificationData {
  type: NotificationType;
  title?: string;
  message: string;
}

export abstract class NotificationDataModel implements NotificationData {
  type: NotificationType;
  title?: string;
  message: string;

  constructor(type: NotificationType, message: string, title?: string) {
    this.type = type;
    this.message = message;
    this.title = title;
  }
}

export class SnackBarNotificationData extends NotificationDataModel {
  panelClass: string;
  icon: string;
  constructor(panelClass: string, icon: string, type: NotificationType, message: string, title?: string) {
    super(type, message, title);
    this.panelClass = panelClass;
    this.icon = icon;
  }
}

export class ErrorModalNotificationData extends NotificationDataModel {
  errorCode: string;
  constructor(errorCode: string, type: NotificationType, message: string, title?: string) {
    super(type, message, title);
    this.errorCode = errorCode;
  }
}

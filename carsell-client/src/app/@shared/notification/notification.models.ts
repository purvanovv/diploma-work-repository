export enum NotificationType {
    ERROR,
    SUCESS
}

export interface NotificationData {
    type: NotificationType;
    title: string;
    message: string;
    panelClass: string;
    icon: string;
}

export class NotificationDataModel implements NotificationData {
    type: NotificationType;
    title: string;
    message: string;
    panelClass: string;
    icon: string;

    constructor(message: string, type: NotificationType, panelClass: string, icon: string) {
        this.message = message;
        this.type = type;
        this.panelClass = panelClass;
        this.icon = icon;
    }
}
export interface UserInfo {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    telephone: string;
    userId: number;
}

export class UserInfoModel implements UserInfo {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    telephone: string;
    userId: number;
}
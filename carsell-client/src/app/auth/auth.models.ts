export interface Credentials {
    userId: number;
    username: string;
    token: string;
    tokenExpired: number;
}

export class CredentialsModel implements Credentials {
    public userId: number;
    public username: string;
    public token: string;
    public tokenExpired: number;
}

export interface Signin {
    username: string;
    password: string;
    remember?: boolean;
}

export class SigninModel implements Signin {
    public username: string;
    public password: string;
    public remember?: boolean;
}

export interface Signup {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    telephone: string;
}

export class SignupModel implements Signup {
    public username: string;
    public password: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public telephone: string;
}
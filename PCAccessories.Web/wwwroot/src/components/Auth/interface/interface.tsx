export interface IUser {
    accessToken: string;
    username: string;
    email: string;
    password?: string;
    confirmPassword?: string;
}
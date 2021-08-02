import { IUSER } from "../IUSER";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUSER;
}
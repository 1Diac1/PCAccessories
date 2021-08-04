import {AxiosResponse} from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(Username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {Username, password})
    }

    static async registration(username: string, email: string, password: string, confirmPassword: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {username, email, password, confirmPassword})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }
}
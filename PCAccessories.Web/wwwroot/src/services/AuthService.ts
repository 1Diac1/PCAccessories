import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
     static async login(Username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
         return $api.post<AuthResponse>('/auth/login', {Username, password})
     }
     
     static async registration(login: string, email: string, password: string, confirmPassword: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {login, email, password, confirmPassword})
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/auth/login')
    }
}
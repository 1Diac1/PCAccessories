import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
     static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
         return $api.post<AuthResponse>('/auth/login', {login, password})
     }
     
     static async registration(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {login, password})
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/auth/login')
    }
}
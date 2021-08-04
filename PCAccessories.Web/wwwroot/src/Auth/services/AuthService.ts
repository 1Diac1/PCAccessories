import {AxiosResponse} from "axios";
import $api from "../http";
import {AuthResponse} from "../models/response/AuthResponse";
import Any = jasmine.Any;

export default class AuthService {
    static async login(Username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {Username, password})
    }

    static async registration(username: string, email: string, password: string, confirmPassword: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {username, email, password, confirmPassword})
    }

    static async logout(): Promise<AxiosResponse<Any>> {
        return $api.post('/auth/logout')
    }
}
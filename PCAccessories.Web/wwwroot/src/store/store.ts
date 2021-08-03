import { makeAutoObservable } from "mobx";
import { IUSER } from "../models/IUSER";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";

export default class Store {
    user = {} as IUSER;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUSER) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(Username: string, password: string) {
        try {
            const response = await AuthService.login(Username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e) {
            console.log(e.response?.data?.message);
            
        }
    }
    
    async registration(Username: string, email: string, password: string, confirmPassword:string) {
        try {
            const response = await AuthService.registration(Username, email, password, confirmPassword);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e) {
            console.log(e.response?.data?.message);
            
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false)
            this.setUser({} as IUSER)
        } catch(e) {
            console.log(e.response?.data?.message);
            
        }
    }

    async checkAuth() {
        this.setLoading(true)

        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})

            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);

        } finally {
            this.setLoading(false)
        }
    }
}
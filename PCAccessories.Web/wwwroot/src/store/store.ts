import { makeAutoObservable } from "mobx";
import { IUSER } from "../models/IUSER";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";

export default class Store {
    username = "";
    email = "";
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: string) {
        this.username = user;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.username)
        } catch(e) {
            console.log(e.response?.data?.message);
            
        }
    }
    
    async registration(username: string, email: string, password: string, confirmPassword:string) {
        try {
            const response = await AuthService.registration(username, email, password, confirmPassword);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.username)
            this.setEmail(response.data.email)
        } catch(e) {
            console.log(e.response?.data?.message);
            
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser("");
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
            this.setUser(response.data.username)
        } catch (e) {
            console.log(e.response?.data?.message);

        } finally {
            this.setLoading(false)
        }
    }
}
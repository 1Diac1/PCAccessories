import { makeAutoObservable } from "mobx";
import { IUSER } from "../models/IUSER";
import AuthService from "../services/AuthService";

export default class Store {
    user = {} as IUSER;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUSER) {
        this.user = user;
    }

    async login(login: string, password: string) {
        try {
            const response = await AuthService.login(login, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e) {
            console.log(e.response?.data?.message);
            
        }
    }
    
    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
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
}
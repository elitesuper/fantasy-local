import {User} from "../models/user/user";
import getAxiosInstance from "../lib/getAxiosInstance";
import {authHeader, headers} from "./auth-header";
import {UserData} from "../models/user/user-data";

const axios = getAxiosInstance(process.env.COMMON_BASE_URL ?? '');

export class AuthService {
    static readonly shared: AuthService = new AuthService();

    logIn(user: User) {
        return axios.post('/api/users/login', user, { headers: authHeader() });
    }

    getToken(user: any) {
        return axios.post('/token', user, { headers: headers() });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    signUp(user: User) {
        return axios.post('/api/users/register', user, { headers: headers() });
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getCurrentToken() {
        return JSON.parse(localStorage.getItem('token'));
    }

    setUser(user: UserData) {
        return localStorage.setItem('user', JSON.stringify(user));
    }

    setToken(token: string) {
        return localStorage.setItem('token', token);
    }

    checkAuthenticate() {
        const user = this.getUser();
        return user?.uId || user?.uId === 0;
    }
}

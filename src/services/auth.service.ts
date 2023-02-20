import {User} from "../models/user/user";
import getAxiosInstance from "../lib/getAxiosInstance";
import {authHeader, headers} from "./auth-header";
import {UserData} from "../models/user/user-data";

const axios = getAxiosInstance(process.env.COMMON_BASE_URL ?? '');

export class AuthService {
    static readonly shared: AuthService = new AuthService();

    async logIn(user: { password: string; mobileNumber: string; countryCode: string | undefined; deviceToken: string }) {
        const headers = await authHeader();
        return axios.post('/api/users/login', user, { headers: headers });
    }

    getToken(user: any) {
        return axios.post('/token', user);
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    async signUp(user: User) {
        const headers = await authHeader();
        return axios.post('/api/users/register', user, { headers: headers });
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

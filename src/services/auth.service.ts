import {User} from "../models/user/user";
import getAxiosInstance from "../lib/getAxiosInstance";
import authHeader from "./auth-header";
import {UserData} from "../models/user/user-data";

const axios = getAxiosInstance(process.env.COMMON_BASE_URL ?? '');

export class AuthService {
    static readonly shared: AuthService = new AuthService();

    logIn(user: User) {
        return axios.post('/api/users/login', user, { headers: authHeader() });
    }

    logout() {
        localStorage.removeItem("user");
    }

    signUp(user: User) {
        return axios.post('/api/users/register', user, { headers: authHeader() });
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    setUser(user: UserData) {
        return localStorage.setItem('user', JSON.stringify(user));
    }

    checkAuthenticate() {
        const user = this.getUser();
        return user?.uId || user?.uId === 0;
    }
}

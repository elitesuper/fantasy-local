import {authHeader, uploadHeader} from "./auth-header";
import {PhoneVerify, User, UserData} from "../models/user/user-type";
import axios from "axios";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export class AuthService {
    static readonly shared: AuthService = new AuthService();

    async logIn(user: { password: string; mobileNumber: string; deviceToken: string; deviceRegistration: string }) {
        const headers = await authHeader();
        return axios.post(`${baseUrl}/api/users/login`, user, {withCredentials: true, headers: headers });
    }

    async recoveryPassword(phone:{mobileNumber:string}){
        return axios.post(`${baseUrl}/api/users/forgot-password`, phone)
    }

    async sendNewPassword(data:{mobileNumber:string; newPassword:string}){
        return axios.post(`${baseUrl}/api/users/change-password`, data)
    }

    async updateProfilePicture(formData:any){
        const headers = await uploadHeader();
        return axios.post(`${baseUrl}/api/users/update-profile-picture`, formData, {headers: headers})
    }

    getToken(user: any) {
        return axios.post('/token', user);
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    async signUp(user : User) {
        return axios.post(`${baseUrl}/api/users/register`, user);
    }

    async phoneVerify(code : PhoneVerify){
        return axios.post(`${baseUrl}/api/users/account-verification`, code)
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user')||"{}");
    }

    getCurrentToken() {
        return JSON.parse(localStorage.getItem('token')??"{}");
    }

    getRecoveryPhoneNumber() {
        return JSON.parse(localStorage.getItem('userphone')||'{}');
    }

    getRegisterInfo() {
        return JSON.parse(localStorage.getItem('register')||"{}");
    }
    setUser(user: any) {
        return localStorage.setItem('user', JSON.stringify(user));
    }

    setToken(token: string) {
        return localStorage.setItem('token', token);
    }

    checkAuthenticate() {
        const user = this.getUser();
        return user?.userID || user?.userID === 0;
    }
}

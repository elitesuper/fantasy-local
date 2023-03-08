import getAxiosInstance from "../lib/getAxiosInstance";
import {authHeader, headers} from "./auth-header";
import { ProfileData } from "../models/profile/profile-type";
import axios from "axios";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export class ProfileService {
    static readonly shared: ProfileService = new ProfileService();

    
    async updateProfile(data: ProfileData) {
        const headers = await authHeader();
        return axios.post(`${baseUrl}/api/users/update-profile`, data, {withCredentials: true, headers: headers });
    }

}

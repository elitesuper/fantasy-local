import {authHeader} from "./auth-header";
import axios from "axios";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export class FriendsService {
    
    static readonly shared: FriendsService = new FriendsService();


    async getFriends(filter: { userId: String; searchKey: String }) {
        const headers = await authHeader();
        return axios.post(baseUrl + '/api/users/my-friends', filter, { headers: headers });
    }
}
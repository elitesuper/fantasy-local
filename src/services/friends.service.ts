import {authHeader} from "./auth-header";
import axios from "axios";

export class FriendsService {
    
    static readonly shared: FriendsService = new FriendsService();


    async getFriends(filter: { userId: String; searchKey: String }) {
        const headers = await authHeader();
        return axios.post('/common-api/api/users/my-friends', filter, { headers: headers });
    }
}
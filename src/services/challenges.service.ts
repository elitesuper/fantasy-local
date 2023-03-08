import {authHeader} from "./auth-header";
import axios from "axios";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export class ChallengesService {
    
    static readonly shared: ChallengesService = new ChallengesService();

    async findChallenge(reqBody: { userId: String; challengePrivacy: Boolean; pageIndex: Number, pageSize: Number }) {
        const headers = await authHeader();
        return axios.post(baseUrl + '/api/find-challenges', reqBody, { headers: headers });
    }

    async matchesDataNoPlayers() {
        const headers = await authHeader();
        return axios.post(baseUrl + '/api/matches-data-no-players', {}, { headers: headers });
    }
}
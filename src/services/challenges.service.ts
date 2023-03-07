import {authHeader} from "./auth-header";
import axios from "axios";

export class ChallengesService {
    
    static readonly shared: ChallengesService = new ChallengesService();

    async findChallenge(reqBody: { userId: String; challengePrivacy: Boolean; pageIndex: Number, pageSize: Number }) {
        const headers = await authHeader();
        return axios.post('/common-api/api/find-challenges', reqBody, { headers: headers });
    }

    async matchesDataNoPlayers() {
        const headers = await authHeader();
        return axios.post('/common-api/api/matches-data-no-players', {}, { headers: headers });
    }
}
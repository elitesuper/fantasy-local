export interface ChallengeData {
    userId: string;
    creatorName: string;
    challengeId: number;
    challengeName: string;
    challengePenalty: string;
    matchStartTime: string;
    formations: number;
    challengePrivacy: string;
    challengeDateTime: string;
    challengeMatchIds: string;
    fromDate: string;
    toDate: string;
    currentChallengeStatus: string;
    isChallengeStarted: number;
    numberOfChallengers: number;
    maxChallengers: number;
    challengers: any;
    challengerPlayers: any;
    challengeMatches: any;
}
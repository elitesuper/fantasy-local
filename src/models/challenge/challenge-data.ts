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

export interface MatchesData {
    matchId: number;
    matchStatus: string;
    matchDate: string;
    countryId: number;
    countryName: string;
    seasonId: number;
    season: string;
    leagueId: number;
    leagueName: string;
    leagueImageUri: string;
    contestGroupId: number;
    contestGroupName: string;
    homeTeamId: number;
    homeTeamName: string;
    homeTeamImageUri: string;
    awayTeamId: number;
    awayTeamName: string;
    awayTeamImageUri: string;
    matchType: string;
    homeScore: string;
    awayScore: string;
    homePlayers: any;
    awayPlayers: any
}

export interface LeaguesData {
    contestGroupId: number;
    contestGroupName: string;
    countryId: number;
    countryName: string;
    leagueId: number;
    leagueImageUri: string;
    leagueName: string;
    matches: any;
    roundMatches:number;
    roundName: string;
    season: string;
    seasonId: number;
    todayMatches: number;
}
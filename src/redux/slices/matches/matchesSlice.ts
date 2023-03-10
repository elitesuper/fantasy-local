import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMatchesDataNoPlayers } from './matchesActionCreation';
import {Player} from "../players/playersSlice";

interface MatchesState {
    match: any;
    league: any;
    round: any;
    topMatches: Array<Match>;
    leagues: Array<League>;
    formation: Array<Formation>;
    formationData: any,
    loading: boolean;
}

export interface Match {
    matchId: number,
    matchStatus: string,
    matchDate: string,
    countryId: number,
    countryName: string,
    seasonId: number,
    season: string,
    leagueId: number,
    leagueName: string,
    leagueImageUri: string,
    contestGroupId: number,
    contestGroupName: string,
    homeTeamId: number,
    homeTeamName: string,
    homeTeamImageUri: string,
    awayTeamId: number,
    awayTeamName: string,
    awayTeamImageUri: string,
    matchType: string,
    homeScore: string,
    awayScore: string,
    homePlayers: Array<MatchPlayer>,
    awayPlayers: Array<MatchPlayer>
}

export interface MatchPlayer {
    matchId: number,
    playerId: number,
    playerName: string,
    playerSName: string,
    playerPoints: number,
    seasonalPoints: number,
    runningPoints: number,
    teamId: number,
    teamName: string,
    playerPosition: string,
    shirtNo: string,
    shirtImageUri: string,
    inLineup: boolean,
    points: Array<Point>
}

export interface Point {
    value: number,
    name: string,
    occurence: number
}

export interface League {
    countryId: number,
    countryName: string,
    seasonId: number,
    season: string,
    leagueId: number,
    leagueName: string,
    leagueImageUri: string,
    contestGroupId: number,
    contestGroupName: string,
    roundName: string,
    todayMatches: number,
    roundMatches: number,
    matches: Array<Match>
}

export interface Formation {
    matchId: number,
    leagueId: number,
    roundId: number,
    teamSize: number,
    wk0: any,
    bw0: any,
    bt0: any,
    ar0: any,
    bw1: any,
    bt1: any,
    ar1: any,
    bw2: any,
    bt2: any,
    ar2: any,
    bw3: any,
    bt3: any,
}

const initialState: MatchesState = {
    match: {},
    league: {},
    round: null,
    topMatches: [],
    leagues: [],
    formation: [],
    formationData: null,
    loading: true,
};

export const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        updateSelectedMatch(state, action: PayloadAction<Match>) {
            state.match = action.payload;
        },
        updateSelectedLeague(state, action: PayloadAction<League>) {
            state.league = action.payload;
        },
        updateSelectedRound(state, action: PayloadAction<{ round: any }>) {
            const { round } = action.payload;
            state.round = round;
        },
        updateSelectedFormationData(state, action: PayloadAction<Formation>) {
            state.formationData = action.payload;
            let formation: Array<Formation> = state.formation??[];
            const dataIndex = formation?.findIndex(data => state.formationData.matchId === data.matchId && state.formationData.leagueId === data.leagueId && state.formationData.roundId === data.roundId);
            if (dataIndex > -1) {
                formation[dataIndex] = state.formationData;
            } else {
                formation.push(state.formationData);
            }
            state.formation = formation;
        },
        updateTopMatches(state, action: PayloadAction<Array<Match>>) {
            state.topMatches = action.payload;
        },
        updateLeagues(state, action: PayloadAction<Array<League>>) {
            state.leagues = action.payload;
        },
        updateFormation(state, action: PayloadAction<Array<Formation>>) {
            state.formation = action.payload;
        },
    },
    extraReducers: (builder) => (
        builder.addCase(getMatchesDataNoPlayers.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getMatchesDataNoPlayers.fulfilled, (state, action) => {
            state.topMatches = action.payload.topMatches;
            state.leagues = action.payload.leagues;
            state.loading = false;
        })
    ),
});

export const { updateSelectedMatch, updateSelectedLeague, updateTopMatches, updateLeagues, updateSelectedFormationData, updateSelectedRound, updateFormation } = matchesSlice.actions;
export default matchesSlice.reducer;

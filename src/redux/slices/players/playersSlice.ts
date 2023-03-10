import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlayers, get10Players } from './playersActionCreation';

interface PlayersState {
    playerId: string;
    wk10Players: Array<Player>;
    bt10Players: Array<Player>;
    bw10Players: Array<Player>;
    ar10Players: Array<Player>;
    wkPlayers: Array<Player>;
    btPlayers: Array<Player>;
    bwPlayers: Array<Player>;
    arPlayers: Array<Player>;
    loading: boolean;
    loading10: boolean;
}

export interface Player {
    playerId: string;
    playerName: string;
    teamId: number;
    teamName: string;
    playerPosition: string;
    shirtNo: string;
    shirtImageUri: string;
    points: number;
}

const initialState: PlayersState = {
    playerId: '',
    wkPlayers: [],
    btPlayers: [],
    bwPlayers: [],
    arPlayers: [],
    wk10Players: [],
    bt10Players: [],
    bw10Players: [],
    ar10Players: [],
    loading: true,
    loading10: true,
};

export const playersSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        updateSelectedPlayerId(state, action: PayloadAction<{ playerId: string }>) {
            const { playerId } = action.payload;
            state.playerId = playerId;
        },
        updateWKPlayersData(state, action: PayloadAction<Array<Player>>) {
            state.wkPlayers = action.payload;
        },
        updateBTPlayersData(state, action: PayloadAction<Array<Player>>) {
            state.btPlayers = action.payload;
        },
        updateBWPlayersData(state, action: PayloadAction<Array<Player>>) {
            state.bwPlayers = action.payload;
        },
        updateARPlayersData(state, action: PayloadAction<Array<Player>>) {
            state.arPlayers = action.payload;
        },
        updateWK10PlayersData(state, action: PayloadAction<Array<Player>>) {
            state.wk10Players = action.payload;
        },
        updateBT10PlayersData(state, action: PayloadAction<Array<Player>>) {
            state.bt10Players = action.payload;
        },
        updateBW10PlayersData(state, action: PayloadAction<Array<Player>>) {
            state.bw10Players = action.payload;
        },
        updateAR10PlayersData(state, action: PayloadAction<Array<Player>>) {
            state.ar10Players = action.payload;
        },
    },
    extraReducers: (builder) => (
        builder.addCase(getPlayers.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(getPlayers.fulfilled, (state, action) => {
            let players: Array<Player> = [];

            if (action.payload.length > 0) {
                action.payload.forEach((element: any) => {
                    players.push({
                        playerId: element.playerId,
                        playerName: element.playerName,
                        teamId: element.teamId,
                        teamName: element.teamName,
                        playerPosition: element.playerPosition,
                        shirtNo: element.shirtNo,
                        shirtImageUri: element.shirtImageUri,
                        points: element.points
                    });
                });
                switch (players[0]?.playerPosition) {
                    case 'Bowler':
                        state.bwPlayers = players;
                        break;
                    case 'Batsman':
                        state.btPlayers = players;
                        break;
                    case 'All rounder':
                        state.arPlayers = players;
                        break;
                    case 'Wicketkeeper':
                        state.wkPlayers = players;
                        break;
                }
            }
            state.loading = false;
        }),
        builder.addCase(get10Players.pending, (state, action) => {
            state.loading10 = true;
        }),
        builder.addCase(get10Players.fulfilled, (state, action) => {
            let players: Array<Player> = [];

            if (action.payload.length > 0) {
                action.payload.forEach((element: any) => {
                    players.push({
                        playerId: element.playerId,
                        playerName: element.playerName,
                        teamId: element.teamId,
                        teamName: element.teamName,
                        playerPosition: element.playerPosition,
                        shirtNo: element.shirtNo,
                        shirtImageUri: element.shirtImageUri,
                        points: element.points
                    });
                });
                switch (players[0]?.playerPosition) {
                    case 'Bowler':
                        state.bw10Players = players;
                        break;
                    case 'Batsman':
                        state.bt10Players = players;
                        break;
                    case 'All rounder':
                        state.ar10Players = players;
                        break;
                    default:
                        state.wk10Players = players;
                        break;
                }
            }
            state.loading10 = false;
        })
    ),
});

export const { updateSelectedPlayerId, updateWKPlayersData, updateBTPlayersData, updateBWPlayersData, updateARPlayersData, updateWK10PlayersData, updateBT10PlayersData, updateBW10PlayersData, updateAR10PlayersData } = playersSlice.actions;
export default playersSlice.reducer;

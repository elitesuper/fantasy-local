import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { playersSlice } from "../slices/players/playersSlice";
import {matchesSlice} from "../slices/matches/matchesSlice";

const reducers = combineReducers({
    // here we will be adding reducers
    players: playersSlice.reducer,
    matches: matchesSlice.reducer
});

const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
];

const persistConfig = {
    whitelist: ['players', 'matches'],
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }), });
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

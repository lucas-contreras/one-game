import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CardReducer from './card';

const reducer = combineReducers({
    cards: CardReducer
})

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;



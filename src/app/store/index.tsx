import {combineReducers} from 'redux'
import {configureStore,  getDefaultMiddleware} from "@reduxjs/toolkit";

import core from './core';
import posts from './posts';

export const actions = {
    core: core.actions,
    posts: posts.actions,
};

const reducer = combineReducers({
    core: core.reducer,
    posts: posts.reducer,
});

const middleware = getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: true,
    thunk: true,
});

const devTools = process.env.NODE_ENV !== 'production';

const store = configureStore({
    reducer,
    middleware,
    devTools,
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch

export default store;

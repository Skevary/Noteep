import {combineReducers} from 'redux'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

/* Store Types */


/* Store Slices */

import app from './app-slice';
import nav from './nav-slice';


// Common Actions
export const actions = {
    app : app.actions,
    nav: nav.actions
};

// Root Reducer
const reducer = combineReducers({
    app : app.reducer,
    nav: nav.reducer
});


// Store Middleware
const middleware = getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: true,
    thunk: true,
});

const devTools = process.env.NODE_ENV !== 'production';

/* Store configuration */

const store = configureStore({
    reducer, middleware, devTools
});


export default store;

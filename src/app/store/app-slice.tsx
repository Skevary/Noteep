import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "./types";


const initialState: AppState = {
    sidebar: 'expanded',
    theme: 'dark',
    viewMode: 'tiles',
    activeLabel: 0,
    searchValue: ''
};

const app = createSlice({
    name: 'app', initialState,
    reducers: {
        toggleSidebar(state) {
            const {sidebar} = state;
            state.sidebar = sidebar === 'expanded' ? 'collapsed' : 'expanded'
        },
        toggleTheme(state) {
            const {theme} = state;
            state.theme = theme === 'dark' ? 'light' : 'dark';
        },
        toggleNoteView(state) {
            const {viewMode} = state;
            state.viewMode = viewMode === 'tiles' ? 'list' : 'tiles'
        },
        selectActiveLabel(state, {payload}: PayloadAction<number>) {
            state.activeLabel = payload;
        },
        setSearchValue(state, {payload}: PayloadAction<string>) {
            state.searchValue = payload;
            console.log(`[Store]: ${payload}`);
        }
    }
});

export default app;



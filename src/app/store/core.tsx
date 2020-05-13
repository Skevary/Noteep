import {createSlice} from "@reduxjs/toolkit";
import {getFromLS} from "../shared/utility";
import {PagesPaths} from "../router";

export interface CoreState {
    sidebar: 'collapsed' | 'expanded'
    theme: 'light' | 'dark';
    viewMode: 'list' | 'tiles';
    loadIndicator: 'ready' | 'progress' | 'success' | 'error';
    searchValue: string;
    currentPage: PagesPaths;
}

const initialState: Readonly<CoreState> = {
    sidebar: getFromLS('sidebar') || 'expanded',
    theme: getFromLS('theme') || 'light',
    viewMode: getFromLS('view') || 'list',
    searchValue: '',
    loadIndicator: 'ready',
    currentPage: getFromLS('page') || '/'
};

export default createSlice({
    name: 'core',
    initialState,
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
        setSearchValue(state, {payload}) {
            state.searchValue = payload;
        },
        setActivePage(state, {payload}) {
            state.currentPage = payload;
        },
        changeLoadIndicator(state, {payload}) {
            state.loadIndicator = payload;
        }
    }
});

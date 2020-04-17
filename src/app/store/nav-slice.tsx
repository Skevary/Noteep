import {NavItem, NavState, SystemPart} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const system: Record<SystemPart, NavItem<SystemPart>> = {
    main: {
        id: 'main',
        icon: 'Light',
        title: 'Notes'
    },
    archive: {
        id: 'archive',
        icon: 'Box',
        title: 'Archive'
    },
    editLabels: {
        id: 'editLabels',
        icon: 'Pencil',
        title: 'Edit labels'
    },
    dump: {
        id: 'dump',
        icon: 'Trash',
        title: 'Trash'
    }
};

const custom: Record<string, NavItem<string>> = {
    ['wq3rg6']: {
        id: 'wq3rg6',
        icon: 'Bookmarks',
        title: 'Bookmarks'
    },
    ['hf5d4d']: {
        id: 'hf5d4d',
        icon: 'Bookmarks',
        title: 'Custom Label'
    }
};

const initialState: NavState = {
    labelsById: {system, custom},
    activeLabel: 'main',
    totalId: [
        ...Object.keys(system),
        ...Object.keys(custom)
    ]
};

const nav = createSlice({
    name: 'nav', initialState,
    reducers: {
        setActiveLabel(state, {payload}: PayloadAction<string>) {
            state.activeLabel = payload;
        }
    }
});

export default nav;

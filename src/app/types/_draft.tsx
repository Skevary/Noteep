/*
*   approximate possible models
*/

import {Theme} from "./index";

type Label = {
    name: string;
    icon: string;
    itemCount?: number;
}

type AppState = {
    menuHasOpen: boolean;
    activePage: {
        icons: string,
        title: string,
        url: string
    }
    selectedSearch: boolean;
    pageUpdated: boolean;
    viewMode: 'list' | 'tiled';
    theme: Theme;

    labels: Label[],
    totalNotes: NoteView[]
}


type NoteState = {
    uid: string;
    location: 'pinned' | 'others' | 'archive' | 'graveyard';
    createdDate: number;
    lastEditTime: number;
    labels: string[];
    attachedImages: string[]
    attachedLinks: {
        previewImg: string;
        name: string;
        url: string;
    }[];
    header: string;
    editorState: any; // Editor State


    trashExpireTime?: number;
}

type NoteView = {
    state: NoteState;
    type: 'note' | 'article';
    hashcode: string;
    position: number;
    color: string;

    selected: boolean;
    view: 'compact' | 'full' | 'edit';
}

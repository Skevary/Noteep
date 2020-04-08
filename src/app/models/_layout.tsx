import {KeyboardEvent} from "react";
import {Icon} from "./_icons";

export type Sidebar = 'collapsed' | 'expanded';
export type Theme = 'light' | 'dark';
export type NoteView = 'list' | 'tiled';
export type SyntheticKeyboardEvent = KeyboardEvent<{}>;


export type EditorCtrl = {
    label: string;
    style: string;
    icon: Icon
}

export type Link = {
    id: string;
    icon: Icon;
    title: string;
    items: number;
}

export interface AppState {
    sideBar: Sidebar
    noteView: NoteView;
    colorTheme: Theme;
    links: Link[];
    activeLink: number;
}


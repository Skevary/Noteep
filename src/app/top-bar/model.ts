export type Sidebar = 'collapsed' | 'expanded';
export type Theme = 'light' | 'dark';
export type NoteView = 'list' | 'tiled';

export type Link = {
    icon: JSX.Element;
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

export type TopBarProps = {
    sideBar: Sidebar
    noteView: NoteView;
    colorTheme: Theme;
    links: Link[];
    activeLink: number;
    changeSideBar: (v: Sidebar) => void;
    changeNoteView: (v: NoteView) => void;
    changeColorTheme: (v: Theme) => void;
}

export type SideBarProps = {
    sideBar: Sidebar
    links: Link[];
    activeLink: number;
    changeActiveLink: (v: number) => void;
}

export type MenuButton = {
    toggleSideBar: (val: boolean) => void;
}

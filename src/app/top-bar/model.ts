export type Sidebar = 'collapsed' | 'expanded';
export type Theme = 'light' | 'dark';
export type NoteView = 'list' | 'tiled';

export type Link = {
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

export type Icon = 'Bar'
    | 'BookmarkAlt'
    | 'Bookmarks'
    | 'BoxAlt'
    | 'Box'
    | 'Cancel'
    | 'CircleChecked'
    | 'CirclePlus'
    | 'Clock'
    | 'Code'
    | 'Collapse'
    | 'Contrast'
    | 'Cross'
    | 'Day'
    | 'DeleteBin'
    | 'File'
    | 'Folder'
    | 'HealthData'
    | 'LightOn'
    | 'Light'
    | 'LightbulbSolid'
    | 'Lock'
    | 'Logo'
    | 'Night'
    | 'OpenedFolder'
    | 'Padlock'
    | 'PaintPlate'
    | 'Pen'
    | 'Pencil'
    | 'Picture'
    | 'Pin'
    | 'Redo'
    | 'SaveClose'
    | 'Search'
    | 'Settings'
    | 'TickBox'
    | 'Trash'
    | 'Undo'
    | 'Unpin'
    | 'Update'
    | 'ViewHeadline';

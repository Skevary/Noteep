import {SvgIconName} from "../components/icon";

export type Sidebar = 'collapsed' | 'expanded';
export type ThemeColor = 'light' | 'dark';
export type NotesViewMode = 'list' | 'tiles';
export type Refresh = 'ready' | 'inProgress' | 'success' | 'error';
export type SystemPart = 'main' | 'archive' | 'dump' | 'editLabels';

export type NavItem<T> = {
    id: T;
    icon: SvgIconName;
    title: string;
}

export interface AppState {
    readonly sidebar: Sidebar
    readonly theme: ThemeColor;
    readonly viewMode: NotesViewMode;
    readonly refresh?: Refresh;
    readonly activeLabel: number;
    readonly searchValue: string;
}

export interface NavState {
   labelsById: {
      system: Record<SystemPart, NavItem<SystemPart>>;
      custom: Record<string, NavItem<string>>;
   };
   totalId: string[]
   activeLabel: string;
}

export interface RootState {
    readonly app: AppState;
    readonly nav: NavState;
}

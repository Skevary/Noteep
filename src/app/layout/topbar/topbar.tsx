import React from "react";
import {Link, NoteView, Sidebar, Theme} from "../../models";
import Header from "./header";
import SearchBar from "./search";
import SideBarButton from "./sidebar-btn";
import ColorThemeButton from "./theme-btn";
import ViewModeButton from "./view-btn";
import {SvgIcon} from "../../components";

export interface TopBarProps {
    sideBar: Sidebar
    noteView: NoteView;
    colorTheme: Theme;
    links: Link[];
    activeLink: number;
    changeSideBar: (v: Sidebar) => void;
    changeNoteView: (v: NoteView) => void;
    changeColorTheme: (v: Theme) => void;
}

export default (props: TopBarProps) => {

    return (<header>

        <div className={'inline-wrapper'}>
            <SideBarButton {...props} />
            <Header {...props} />
            <SearchBar/>
        </div>

        <div className={'inline-wrapper'} >
            <button className={'icon-btn'}>
                <SvgIcon icon={'Update'} />
            </button>

            <ViewModeButton {...props} />
            <ColorThemeButton {...props} />

            <button className={'icon-btn'}>
                <SvgIcon icon={'Settings'} style={{width: '1.75em', height: '1.75em'}} />
            </button>

            <button className={'profile'}>
                <span className={''} >
                    {'L'}
                </span>
            </button>
        </div>

    </header>)
}

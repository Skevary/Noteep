import React from "react";
import {TopBarProps} from "../model";
import Header from "./header";
import SearchBar from "./search";
import SideBarButton from "./sidebar-btn";
import ColorThemeButton from "./theme-btn";
import ViewModeButton from "./view-btn";
import SvgIcon from "../svg-icon";


export default function TopBar(props: TopBarProps) {

    return (<header>

        <div className={'inline-wrapper'}>
            <SideBarButton {...props} />
            <Header {...props} />
            <SearchBar/>
        </div>

        <div className={'inline-wrapper'}>
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

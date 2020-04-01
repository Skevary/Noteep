import React, {useState} from "react";
import {TopBarProps} from "./model";
import Header from "./header";
import SearchBar from "./search";
import {Settings, Update} from "../icons";
import SideBarButton from "./sidebar-btn";
import ColorThemeButton from "./theme-btn";
import ViewModeButton from "./view-btn";


export default function TopBar(props: TopBarProps) {

    return (<header>

        <div className={'inline-wrapper'}>
            <SideBarButton {...props} />
            <Header {...props} />
            <SearchBar/>
        </div>

        <div className={'inline-wrapper'}>
            <button className={'icon-btn'}>
                <Update/>
            </button>

            <ViewModeButton {...props} />
            <ColorThemeButton {...props} />

            <button className={'icon-btn'}>
                <Settings style={{width: '1.75em', height: '1.75em'}}/>
            </button>

            <button className={'profile'}>
                <span className={''} >
                    {'L'}
                </span>
            </button>
        </div>

    </header>)
}

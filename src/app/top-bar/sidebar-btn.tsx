import React from "react";
import {TopBarProps} from "./model";
import SvgIcon from "../svg-icon";


export default function SideBarButton({sideBar, changeSideBar}: TopBarProps) {
    const newState = sideBar === 'collapsed' ? 'expanded' : 'collapsed';

    return (<button
        title={`Change side-bar mode to ${newState}`}
        className={`icon-btn ${sideBar}`}
        onClick={() => changeSideBar(newState)}>
        <SvgIcon icon={'Bar'} />
    </button>)
}

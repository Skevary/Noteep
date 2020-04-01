import React from "react";
import {TopBarProps} from "./model";
import {Bar} from "../icons";


export default function SideBarButton({sideBar, changeSideBar}: TopBarProps) {
    return (<button
        title={'Change side-bar mode'}
        className={`icon-btn ${sideBar}`}
        onClick={() => changeSideBar(sideBar === 'collapsed' ? 'expanded' : 'collapsed')}>
        <Bar/>
    </button>)
}

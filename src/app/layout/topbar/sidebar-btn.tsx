import React from "react";
import {TopBarProps} from "./topbar";
import {SvgIcon} from "../../components";


const SideBarButton = ({sideBar, changeSideBar}: TopBarProps) => {
    const newState = sideBar === 'collapsed' ? 'expanded' : 'collapsed';

    return (
        <button
            title={`Change side-bar mode to ${newState}`}
            className={`icon-btn ${sideBar}`}
            onClick={() => changeSideBar(newState)}>
            <SvgIcon icon={'Bar'}/>
        </button>
    )
};

export default SideBarButton;

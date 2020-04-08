import React from "react";
import {TopBarProps} from "./topbar";
import {Icon} from "../../models";
import {SvgIcon} from "../../components";

const ViewModeButton = ({noteView: view, changeNoteView}: TopBarProps) => {
    const newState = view === 'tiled' ? 'list' : 'tiled';
    const icon: Icon = view === 'tiled' ? 'ViewHeadline' : 'HealthData';

    return (
        <button
            className={'icon-btn'}
            title={`Change view mode to ${newState}`}
            onClick={() => changeNoteView(newState)}>
            <SvgIcon icon={icon} />
        </button>
    )
}

export default ViewModeButton;

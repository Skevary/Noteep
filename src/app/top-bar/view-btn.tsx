import React from "react";
import {Icon, TopBarProps} from "./model";
import SvgIcon from "../svg-icon";

export default function ViewModeButton({noteView: view, changeNoteView}: TopBarProps) {
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

import React from "react";
import {TopBarProps} from "./model";
import {Day, HealthData, Night, ViewHeadline} from "../icons";

export default function ViewModeButton({noteView: view, changeNoteView}: TopBarProps) {

    return (
        <button
            className={'icon-btn'}
            title={'Change notes view mode'}
            onClick={() => changeNoteView(view === 'tiled' ? 'list' : 'tiled')}>
            {view === 'tiled' ? <ViewHeadline /> : <HealthData />}
        </button>
    )
}

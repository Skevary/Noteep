import React from "react";
import {Icon, TopBarProps} from "./model";
import SvgIcon from "../svg-icon";

export default function ColorThemeButton({colorTheme: color, changeColorTheme}: TopBarProps) {
    const newState = color === 'light' ? 'dark' : 'light';
    const icon: Icon = color === 'light' ? 'Night' : 'Day';

    return (
        <button
            className={'icon-btn'}
            title={`Change color theme to ${newState}`}
            onClick={() => changeColorTheme(newState)}>
            <SvgIcon icon={icon} />
        </button>
    )
}

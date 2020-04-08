import React from "react";
import {Icon} from "../../models";
import {TopBarProps} from "./topbar";
import {SvgIcon} from "../../components";

const ColorThemeButton = ({colorTheme: color, changeColorTheme}: TopBarProps) => {
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
};

export default ColorThemeButton

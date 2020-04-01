import React from "react";
import {Day, Night} from "../icons";
import {TopBarProps} from "./model";

export default function ColorThemeButton({colorTheme: color, changeColorTheme}: TopBarProps) {

    return (
        <button
            className={'icon-btn'}
            title={'Change color theme'}
            onClick={() => changeColorTheme(color === 'light' ? 'dark' : 'light')}>
            {color === 'light' ? <Day/> : <Night/>}
        </button>
    )
}

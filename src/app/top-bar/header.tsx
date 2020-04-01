import React from "react";
import {Logo} from "../icons";
import {Link, TopBarProps} from "./model";

export default function Header({links, activeLink}: TopBarProps) {

    const getText = () => activeLink === 0 ? 'Noteep' : links[activeLink].title;

    return (
        <div className="Header">
            <span className="icon-btn">
                {activeLink === 0 ? <Logo /> : links[activeLink].icon }
            </span>

            <span className="title trim-text" title={getText()}>
                {getText()}
            </span>
        </div>
    )
}

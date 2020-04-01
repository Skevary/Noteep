import React from "react";
import {SideBarProps} from "../top-bar/model";

export default function SideBar({
                                    links,
                                    activeLink,
                                    sideBar,
                                    changeActiveLink
                                }: SideBarProps) {
    const items = links.map(({icon, title}, index) =>
        <div
            key={title}
            className={activeLink === index ? 'item active' : 'item'}
            onClick={() => changeActiveLink(index)}>
            <span className="icon-btn">{icon}</span>
            <span className={'text'}>{title}</span>
        </div>
    );

    return (<nav className={sideBar}>{
        items
    }</nav>)
}

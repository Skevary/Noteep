import React from "react";
import {TopBarProps} from "./topbar";
import {SvgIcon} from "../../components";

const Header = ({links, activeLink}: TopBarProps) => {
    const icon = activeLink === 0 ? 'Logo' : links[activeLink].icon;
    const name = activeLink === 0 ? 'Noteep' : links[activeLink].title;

    return (
        <div className="Header">
            <span className="icon-btn">
                <SvgIcon icon={icon}/>
            </span>

            <span
                className="title trim-text"
                children={name}
                title={name}
            />
        </div>
    )
};

export default Header;

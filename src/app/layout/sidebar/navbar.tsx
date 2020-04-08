import React from "react";
import {SideBarProps} from "./sidebar";
import {SvgIcon} from "../../components";

const NavBar = ({links, activeLink, changeActiveLink}: SideBarProps) => {
    const items = links.map(({icon, title}, index) =>
        <div key={title}
             className={activeLink === index ? 'item active' : 'item'}
             onClick={() => changeActiveLink(index)}>

            <span className="icon-btn">
                <SvgIcon icon={icon}/>
            </span>

            <span className={'text trim-text'}>
                {title}
            </span>
        </div>
    );

    return (<nav>{items}</nav>)
};

export default NavBar;

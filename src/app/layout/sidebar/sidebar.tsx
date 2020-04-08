import React from "react";
import {Link, Sidebar} from "../../models";
import Footer from "./footer";
import NavBar from "./navbar";

export interface SideBarProps {
    sideBar: Sidebar
    links: Link[];
    activeLink: number;
    changeActiveLink: (v: number) => void;
}

export default (props: SideBarProps) => {
    return (
        <aside className={props.sideBar}>
            <div className="aside-wrapper">
                <NavBar {...props}/>
                <Footer/>
            </div>
        </aside>
    )
};


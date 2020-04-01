import React from "react";
import {SideBarProps} from "../model";
import Footer from "./footer";
import NavBar from "./navbar";

export default function SideBar(props: SideBarProps) {
    return (
        <aside className={props.sideBar}>
            <NavBar {...props}/>
            <Footer/>
        </aside>
    )
}

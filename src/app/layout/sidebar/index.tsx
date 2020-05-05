import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import NavBar from "./nav";
import Footer from "./footer";

import './styles.scss'

const Sidebar: FC = memo(() => {
    const sidebar = useSelector(({core}: RootState) => core.sidebar);
    console.log(`@@Sidebar rerender: `, sidebar);

    return (
        <aside className={`Menu ${sidebar}`}>
            <NavBar />
            <Footer />
        </aside>
    )
});

export default Sidebar;

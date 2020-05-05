import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import {Button} from "../../shared/ui/button";
import {classes} from "../../shared/utility";
import {navigate} from "hookrouter";
import {PageMeta} from "../../router";


export const NavBar: FC = memo(() => {
    const path = useSelector(({core}: RootState) => core.currentPage);

    console.log(`@NavBar rerender: `, path);
    const items = Object.entries(PageMeta)
        .map(([key, {icon, nav, id}]) =>
            <Button
                key={key}
                tag={'span'}
                icon={icon}
                className={classes('item', id === path ? 'active' : '')}
                onClick={() => navigate(id)}>
                {nav}
            </Button>
        );


    return <nav>{items}</nav>;
});


export default NavBar;

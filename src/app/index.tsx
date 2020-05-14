import React, {FC, useEffect} from 'react';
import {MainContent, Sidebar, TopBar} from "./layout";

import Router from "./router";

import './styles.scss';
import {useAppDispatch} from "./shared/utility";
import {actions} from "./store";

const App: FC = () => {
    console.log('@@@App rerender');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actions.core.changeLoadIndicator('progress'))
    }, []);

    return (
        <>
            <TopBar/>
            <Sidebar/>
            <MainContent>
                <Router/>
            </MainContent>
        </>
    )
};


export default App;

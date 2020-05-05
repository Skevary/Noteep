import React, {FC} from 'react';
import {
    TopBar,
    Sidebar,
    MainContent
} from "./layout";

import Router from "./router";

import './styles.scss';

const App: FC = () => {
    console.log('@@@App rerender');

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

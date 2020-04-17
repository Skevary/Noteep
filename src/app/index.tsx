import React, {FC} from 'react';
import {TopBar, Sidebar, Main} from "./layout";
import {Provider} from "react-redux";
import store from "./store";

const App: FC = () => {
    return (
        <Provider store={store}>
            <TopBar/>
            <Sidebar/>
            <Main/>
        </Provider>
    )
};

export default App;

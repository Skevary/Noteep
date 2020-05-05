import React, {FC, memo, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {putInLS, useAfterEffect, useAppDispatch} from "../../shared/utility";
import {actions, RootState} from "../../store";
import {Button} from "../../shared/ui/button";

import './styles.scss';

const TopBar: FC = memo(() => {
    console.log(`@@TopBar rerender: `);

    return (
        <header>
          <div className="TopBar">
              <div className='wrapper'>
                  <Burger/>
                  <Brand/>
                  <Search/>
              </div>
              <div className='wrapper'>
                  <Update/>
                  <ViewMode/>
                  <Theme/>
                  <Settings/>
                  <UserProfile/>
              </div>
          </div>
        </header>
    )
});

const Burger: FC = () => {
    const sidebar = useSelector(({core}: RootState) => core.sidebar);
    const dispatch = useAppDispatch();
    // console.log('From Burger');
    useAfterEffect(() => {
        putInLS(sidebar, "sidebar")
    }, [sidebar]);

    return (
        <Button
            icon={'Bar'}
            title={`Sidebar are ${sidebar}`}
            onClick={() => dispatch(actions.core.toggleSidebar())}
        />
    )
};

const Brand: FC = () => {
    // console.log('From Brand');

    return (
        <Button
            className={'Brand lg'}
            tag={'div'}
            icon={'Logo'}
            title={'Noteep'}>
            {'Noteep'}
        </Button>
    )
};

const Search: FC = () => {
    const [input, setInput] = useState('');
    // console.log('From Search');

    return (
        <div className='Search'>
            <Button
                icon={'Search'}
                className={'embedded sm'}
                style={{left: 3}}
            />

            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Search...'
            />

            {input && (
                <Button
                    icon={'Cross'}
                    className={'embedded sm'}
                    onClick={() => setInput('')}
                    style={{right: 3}}
                />)}
        </div>
    )
};

const Update: FC = () => {
    return (
        <Button
            icon={'Update'} className={'rotate'}
        />
    );
};

const ViewMode: FC = () => {
    const dispatch = useAppDispatch();
    const viewMode = useSelector(({core}: RootState) => core.viewMode);
    // console.log('From ViewMode');
    useAfterEffect(() => {
        putInLS(viewMode, "view")
    }, [viewMode]);

    return (
        <Button
            title={`Notes are displayed in ${viewMode}`}
            onClick={() => dispatch(actions.core.toggleNoteView())}
            icon={viewMode === 'tiles' ? 'ViewHeadline' : 'HealthData'}
        />
    )
};

const Theme: FC = () => {
    const dispatch = useAppDispatch();
    const theme = useSelector(({core}: RootState) => core.theme);
    // console.log('From Theme');
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useAfterEffect(() => {
        putInLS(theme, "theme")
    }, [theme]);

    return (
        <Button
            title={`Color theme are ${theme}`}
            onClick={() => dispatch(actions.core.toggleTheme())}
            icon={theme === 'light' ? 'Night' : 'Day'}
        />
    )
};

const Settings: FC = () => {
    return (
        <Button
            icon={'Settings'}
        />
    );
};

const UserProfile: FC = () => {
    return (
        <button className='Profile'>
            <span>{'L'}</span>
        </button>
    );
};

export default TopBar;

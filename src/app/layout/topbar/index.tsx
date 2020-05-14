import React, {FC, memo, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {putInLS, useAfterEffect, useAppDispatch} from "../../shared/utility";
import {actions, RootState} from "../../store";
import {Button} from "../../shared/ui/button";

import {CoreState} from "../../store/core";
import {IconName} from "../../shared/ui/icon";

import './styles.scss';

const TopBar: FC = memo(() => {
    console.log(`@@TopBar rerender: `);

    return (
        <header className="TopBar">
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
    const [focused, setFocused] = useState(false);
    const css = 'Search' +
        (input.length ? ' mark' : '') +
        (focused ? ' selected' : '');

    // console.log('From Search');
    return (
        <div className={css}>
            <Button
                tag={'span'}
                icon={'Search'}
                className={'sm'}
            />

            <input
                value={input}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                onChange={e => setInput(e.target.value)}
                placeholder='Search...'
            />

            {input && (
                <Button
                    icon={'Cross'}
                    className={'sm'}
                    title={'clear field'}
                    onClick={() => setInput('')}
                />)}
        </div>
    )
};

const indicator: Record<CoreState['loadIndicator'], { icon: IconName }> = {
    ready: {icon: 'Update'},
    error: {icon: 'Cross'},
    progress: {icon: 'Spinner'},
    success: {icon: 'CircleChecked'}
};

const Update: FC = () => {
    const load = useSelector(({core}: RootState) => core.loadIndicator);
    const dispatch = useAppDispatch();
    const timer = useRef<any>();

    const update = () => {
        !!timer.current && clearTimeout(timer.current);
        dispatch(actions.core.changeLoadIndicator('progress'));
        timer.current = setTimeout(endLoading, 1500);
    };

    const endLoading = () => {
        dispatch(actions.core.changeLoadIndicator('ready'));
        clearTimeout(timer.current);
    };

    return (
        <Button
            icon={indicator[load].icon}
            onClick={update}
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
        document.documentElement.className = theme;
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

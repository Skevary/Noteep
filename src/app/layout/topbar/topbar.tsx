import React, {FC, useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {actions} from "../../store";
import {RootState} from "../../store/types";
import {Icon} from "../../components";

import './topbar.scss';

const TopBar: FC = () => {
    console.log('From TopBar');

    return (
        <header className='TopBar'>
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
};

const Burger: FC = () => {
    const sidebar = useSelector(({app}: RootState) => app.sidebar);
    const dispatch = useDispatch();
    console.log('From Burger');

    return (
        <button
            className={`icon-btn`}
            title={`Sidebar are ${sidebar}`}
            onClick={() => dispatch(actions.app.toggleSidebar())}>
            <Icon name='Bar'/>
        </button>
    )
};

const Brand: FC = () => {
    console.log('From Brand');

    return (
        <div className="Brand" title='Noteep'>
            <span className="icon-btn md">
                <Icon name='Logo'/>
            </span>

            <span className="title trim-text">
                {'Noteep'}
            </span>
        </div>
    )
};

const Search: FC = () => {
    const [input, setInput] = useState('');
    console.log('From Search');

    return (
        <div className='Search'>
            <span className='embedded-btn' style={{left: 0}}>
                <Icon name='Search'/>
            </span>

            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Search...'
            />

            {input && <button
                className='embedded-btn'
                style={{right: 0}}
                onClick={() => setInput('')}>
                <Icon name='Cross'/>
            </button>}
        </div>
    )
};

const Update: FC = () => {
    return (
        <button className='icon-btn'>
            <Icon name='Update'/>
        </button>
    );
};

const ViewMode: FC = () => {
    const dispatch = useDispatch();
    const viewMode = useSelector(({app}: RootState) => app.viewMode);
    console.log('From ViewMode');

    return (
        <button
            className='icon-btn'
            title={`Notes are displayed in ${viewMode}`}
            onClick={() => dispatch(actions.app.toggleNoteView())}>
            <Icon name={viewMode === 'tiles' ? 'ViewHeadline' : 'HealthData'}/>
        </button>
    )
};

const Theme: FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector(({app}: RootState) => app.theme);
    console.log('From Theme');

    useEffect(() => {
       document.body.className = theme;
    }, [theme]);

    return (
        <button
            className='icon-btn'
            title={`Color theme are ${theme}`}
            onClick={() => dispatch(actions.app.toggleTheme())}>
            <Icon name={theme === 'light' ? 'Night' : 'Day'}/>
        </button>
    )
};

const Settings: FC = () => {
    return (
        <button className='icon-btn'>
            <Icon name='Settings' style={{width: '1.75em', height: '1.75em'}}/>
        </button>
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

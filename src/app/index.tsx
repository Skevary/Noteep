import React, {useEffect, useRef, useState} from 'react';
import TopBar from './top-bar/top-bar';
import SideBar from "./sidebar/sidebar";
import {Link, NoteView, Sidebar, Theme} from "./top-bar/model";
import {APP_LINKS} from "./shared";

function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const initFromStorage = <T extends {} | null>(key: string, initVal: T): T => localStorage
    .getItem(key) as T || initVal;


export default () => {
    const [sideBar, setSideBar] = useState<Sidebar>(
        initFromStorage<Sidebar>('sideBar', 'expanded')
    );

    const [noteView, setNoteView] = useState<NoteView>(
        initFromStorage<NoteView>('noteView', 'tiled')
    );

    const [colorTheme, setColorTheme] = useState<Theme>(
        initFromStorage<Theme>('colorTheme', 'dark')
    );


    const [links, setLinks] = useState<Link[]>(APP_LINKS);
    const [activeLink, setActiveLink] = useState<number>(0);

    const prevSideBar = usePrevious(sideBar);
    const prevNoteView = usePrevious(noteView);
    const prevColorTheme = usePrevious(colorTheme);

    useEffect(() => {
        if (prevSideBar !== sideBar) {
            localStorage.setItem('sideBar', sideBar);
        }

        if (prevNoteView !== noteView) {
            localStorage.setItem('noteView', noteView)
        }

        if (prevColorTheme !== colorTheme) {
            localStorage.setItem('colorTheme', colorTheme);
            document.body.className = colorTheme;
        }

    }, [sideBar, noteView, colorTheme]);

    return (<>

        <TopBar
            sideBar={sideBar}
            noteView={noteView}
            colorTheme={colorTheme}
            links={links}
            activeLink={activeLink}
            changeSideBar={v => setSideBar(v)}
            changeNoteView={v => setNoteView(v)}
            changeColorTheme={v => setColorTheme(v)}
        />

        <aside>
            <SideBar
                sideBar={sideBar}
                links={links}
                activeLink={activeLink}
                changeActiveLink={v => setActiveLink(v)}
            />

            <footer>

            </footer>
        </aside>

        <main>
        </main>

    </>);
}

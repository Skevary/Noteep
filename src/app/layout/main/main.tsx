import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {Icon, NoteEditor} from "../../components";
import {RootState} from "../../store/types";
import {APP_LINKS} from "../../libs";

import './main.scss'

const Main: FC = () => {
    const [winOpen, changeWinState] = useState<boolean>(false);

    return (
        <main className={'Main'}>
            <NoteEditor
                handleNote={(v) => console.log('Save Note: ', v)}
                winOpen={winOpen}
                changeWinState={(val) => changeWinState(val)}
            />

            {!winOpen && <EmptyCard/>}
        </main>
    )
};

const EmptyCard: FC = () => {
    const activeLabel = useSelector(({app}: RootState) => app.activeLabel);
    const {id, icon} = APP_LINKS[activeLabel];
    const msg = cardMessage(id);

    return (
        <section className={'empty-card'}>
            <span className="bg-icon">
                <Icon name={icon}/>
            </span>
            <span className="message">
                {msg}
            </span>
        </section>
    )
};


function cardMessage(type: 'totalNotes' | 'archive' | 'trash' | 'label' | string): string {
    switch (type) {
        case 'totalNotes':
            return 'Notes you add appear here';
        case 'archive':
            return 'Your archived notes appear here';
        case 'trash':
            return 'No notes in Trash';
        default:
            return 'No notes with this label yet';
    }
}


export default Main;

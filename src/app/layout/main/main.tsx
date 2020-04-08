import React, {useState} from "react";
import {Link} from "../../models";
import {NoteEditor} from "../../components";
import PageCard from "./empty-card";

export interface MainProps {
    links: Link[];
    activeLink: number;
}

export default ({links, activeLink}: MainProps) => {

    const [winOpen, changeWinState] = useState<boolean>(false);

    return (<main>

        <NoteEditor
            handleNote={(v) => console.log('Save Note: ', v)}
            winOpen={winOpen}
            changeWinState={(val) => changeWinState(val)}
        />

        {!winOpen && (
            <PageCard
                links={links}
                activeLink={activeLink}
            />
        )}
    </main>)
};

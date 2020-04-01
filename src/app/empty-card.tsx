import React from "react";
import {Link} from "./model";
import SvgIcon from "./svg-icon";

type EmptyCardProps = {
    links: Link[];
    activeLink: number;
}

type CardType = 'totalNotes' | 'archive' | 'trash' | 'label';

const getCardMessage = (type: CardType | string): string => {
    switch (type) {
        case 'totalNotes': return 'Notes you add appear here';
        case 'archive': return 'Your archived notes appear here';
        case 'trash': return 'No notes in Trash';
        default: return 'No notes with this label yet';
    }
};

export default function EmptyCard({links, activeLink}: EmptyCardProps) {
    const {id, icon}: Link = links[activeLink];
    const msg = getCardMessage(id);

    return (
        <section className={'empty-card'}>
            <span className="bg-icon">
                <SvgIcon icon={icon} />
            </span>
            <span className="message" children={msg} />
        </section>
    )
}

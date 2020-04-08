import React from "react";
import {Link} from "../../models";
import {SvgIcon} from "../../components";

type CardType = 'totalNotes' | 'archive' | 'trash' | 'label';

type EmptyCardProps = {
    links: Link[];
    activeLink: number;
}


const getCardMessage = (type: CardType | string): string => {
    switch (type) {
        case 'totalNotes': return 'Notes you add appear here';
        case 'archive': return 'Your archived notes appear here';
        case 'trash': return 'No notes in Trash';
        default: return 'No notes with this label yet';
    }
};

const PageCard = ({links, activeLink}: EmptyCardProps) => {
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
};

export default PageCard;

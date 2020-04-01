import React from "react";
import {Link} from "../model";

export const APP_LINKS: Link[] = [
    {
        id: 'totalNotes',
        icon: 'Light',
        title: 'Notes',
        items: 0
    },
    {
        id: 'customLabel',
        icon: 'Bookmarks',
        title: 'Custom Label',
        items: 0
    },
    {
        id: 'bookmarks',
        icon: 'Bookmarks',
        title: 'Bookmarks',
        items: 0
    },
    {
        id: '',
        icon: 'Pencil',
        title: 'Edit labels',
        items: 0
    },
    {
        id: 'archive',
        icon: 'Box',
        title: 'Archive',
        items: 0
    },
    {
        id: 'trash',
        icon: 'Trash',
        title: 'Trash',
        items: 0
    }
];


export const BLOCK_TYPES = [
    {label: 'Code Block', style: 'code-block', icon: <i/>},
    {label: 'Blockquote', style: 'blockquote', icon: <i/>},
    {label: 'UL', style: 'unordered-list-item', icon: <i/>},
    {label: 'OL', style: 'ordered-list-item', icon: <i/>},
    {label: 'H1', style: 'header-one', icon: <b>H1</b>},
    {label: 'H2', style: 'header-two', icon: <b>H2</b>},
    {label: 'H3', style: 'header-three', icon: <b>H3</b>},
    {label: 'H4', style: 'header-four', icon: <b>H4</b>},
    {label: 'H5', style: 'header-five', icon: <b>H5</b>},
    {label: 'H6', style: 'header-six', icon: <b>H6</b>},
];

export const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD', icon: <span style={{fontWeight: 'bold'}}>B</span>},
    {label: 'Italic', style: 'ITALIC', icon: <span style={{fontStyle: 'italic'}}>I</span>},
    {label: 'Strikethrough', style: 'STRIKETHROUGH', icon: <span style={{textDecoration: 'line-through'}}>S</span>},
    {label: 'Underline', style: 'UNDERLINE', icon: <span style={{textDecoration: 'underline'}}>U</span>},
    {label: 'Monospace', style: 'CODE', icon: <span style={{fontWeight: 'bold'}}>{'<>'}</span>},
];

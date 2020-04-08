import React from "react";
import {EditorCtrl, Link} from "../models";

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

export const BLOCK_TYPES: EditorCtrl[] = [
    {label: 'Code Block', style: 'code-block', icon: 'CodeBlock'},
    {label: 'Blockquote', style: 'blockquote', icon: 'Blockquote'},
    {label: 'UL', style: 'unordered-list-item', icon: 'UnorderedList'},
    {label: 'OL', style: 'ordered-list-item', icon: 'OrderedList'},
    {label: 'H1', style: 'header-three ', icon: 'Header'}
];

export const INLINE_STYLES: EditorCtrl[] = [
    {label: 'Bold', style: 'BOLD', icon: 'Bold'},
    {label: 'Italic', style: 'ITALIC', icon: 'Italic'},
    {label: 'Strikethrough', style: 'STRIKETHROUGH', icon: 'Strikethrough'},
    {label: 'Underline', style: 'UNDERLINE', icon: 'Underline'},
    {label: 'Monospace', style: 'CODE', icon: 'Code'},
];

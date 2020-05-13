import {IconName} from "../shared/ui/icon";

export type NewPostBox = 'open' | 'collapsed';


type EditorCtrl = {
    label: string;
    style: string;
    icon: IconName
}

export const INLINE_STYLES: EditorCtrl[] = [
    {label: 'Bold', style: 'BOLD', icon: 'Bold'},
    {label: 'Italic', style: 'ITALIC', icon: 'Italic'},
    {label: 'Underline', style: 'UNDERLINE', icon: 'Underline'},
    {label: 'Monospace', style: 'CODE', icon: 'Code'},
];

export const BLOCK_TYPES: EditorCtrl[] = [
    {label: 'H3', style: 'header-three', icon: 'Header'},
    {label: 'Blockquote', style: 'blockquote', icon: 'Blockquote'},
    {label: 'UL', style: 'unordered-list-item', icon: 'UnorderedList'},
    {label: 'OL', style: 'ordered-list-item', icon: 'OrderedList'},
    {label: 'Code Block', style: 'code-block', icon: 'CodeBlock'},
];

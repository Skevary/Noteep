import React from "react";

import CodeIcon from "@material-ui/icons/Code";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";


export const BLOCK_TYPES = [
    {label: 'Code Block', style: 'code-block', icon: <CodeIcon/>},
    {label: 'Blockquote', style: 'blockquote', icon: <FormatQuoteIcon/>},
    {label: 'UL', style: 'unordered-list-item', icon: <FormatListBulletedIcon/>},
    {label: 'OL', style: 'ordered-list-item', icon: <FormatListNumberedIcon/>},
    {label: 'H1', style: 'header-one', icon: <b>H1</b>},
    {label: 'H2', style: 'header-two', icon: <b>H2</b>},
    {label: 'H3', style: 'header-three', icon: <b>H3</b>},
    {label: 'H4', style: 'header-four', icon: <b>H4</b>},
    {label: 'H5', style: 'header-five', icon: <b>H5</b>},
    {label: 'H6', style: 'header-six', icon: <b>H6</b>},
];

export const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD', icon: <FormatBoldIcon/>},
    {label: 'Italic', style: 'ITALIC', icon: <FormatItalicIcon/>},
    {label: 'Strikethrough', style: 'STRIKETHROUGH', icon: <StrikethroughSIcon/>},
    {label: 'Underline', style: 'UNDERLINE', icon: <FormatUnderlinedIcon/>},
    {label: 'Monospace', style: 'CODE', icon: <HorizontalSplitIcon/>},
];

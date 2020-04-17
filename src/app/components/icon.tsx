import React, {FC, useMemo} from "react";
import {Icons} from "../libs";

interface Props extends React.SVGProps<SVGSVGElement> {
    name: SvgIconName;
}

export const Icon: FC<Props> = React.memo(props => {
    const InlineSvg = useMemo(() => (Icons as any)[props.name], [props.name]);
    return <InlineSvg {...props} />
});

export type SvgIconName = 'Bar'
    | 'Blockquote'
    | 'Bold'
    | 'BookmarkAlt'
    | 'Bookmarks'
    | 'Box'
    | 'Cancel'
    | 'Checked'
    | 'CircleChecked'
    | 'CirclePlus'
    | 'Clock'
    | 'CodeBlock'
    | 'Code'
    | 'Collapse'
    | 'Contrast'
    | 'Cross'
    | 'Day'
    | 'DeleteBin'
    | 'File'
    | 'Folder'
    | 'Github'
    | 'Gmail'
    | 'Header'
    | 'HealthData'
    | 'Italic'
    | 'Light'
    | 'Lock'
    | 'Logo'
    | 'Night'
    | 'OpenedFolder'
    | 'OrderedList'
    | 'Padlock'
    | 'PaintPlate'
    | 'Pen'
    | 'Pencil'
    | 'Picture'
    | 'Pin'
    | 'Redo'
    | 'SaveClose'
    | 'Search'
    | 'Settings'
    | 'Strikethrough'
    | 'TickBox'
    | 'Trash'
    | 'Underline'
    | 'Undo'
    | 'UnorderedList'
    | 'Unpin'
    | 'Update'
    | 'ViewHeadline'


import React, {FC} from "react";
import {Button, IconName} from "../../shared/ui";
import {BLOCK_TYPES, INLINE_STYLES} from "../models";
import {EditorState} from "draft-js";

import './styles.scss';

type Props = {
    editor: EditorState
    onToggle: CallableFunction
}

export const InlineStyleControls: FC<Props> = ({editor, onToggle, ...props}) => {
    const currentStyle = editor.getCurrentInlineStyle();
    return (
        <div className="style-ctrls">
            {INLINE_STYLES.map(({label, style, icon}) =>
                <Button
                    key={label}
                    className={`editor-btn transparent ${currentStyle.has(style) && 'active'}`}
                    icon={icon}
                    aria-label={label}
                    title={label}
                    onClick={() => onToggle(style)}
                />
            )}
        </div>
    );
};

export const BlockStyleControls: FC<Props> = ({editor, onToggle, ...props}) => {
    const selection = editor.getSelection();
    const blockType = editor
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="style-ctrls">
            {BLOCK_TYPES.map(({label, style, icon}) =>
                <Button
                    key={label}
                    className={`editor-btn ${style === blockType && 'active'}`}
                    icon={icon}
                    aria-label={label}
                    title={label}
                    onClick={() => onToggle(style)}
                />
            )}
        </div>
    );
};



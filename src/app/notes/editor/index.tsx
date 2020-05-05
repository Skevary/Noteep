import React, {FC, HTMLAttributes, KeyboardEvent, useRef} from "react";

import {
    DraftBlockType,
    DraftEditorCommand,
    DraftInlineStyleType,
    Editor,
    EditorState,
    getDefaultKeyBinding,
    RichUtils,
} from "draft-js";

import {classes} from "../../shared/utility";
import {NewPostBox} from "../models";
import {cssWrapper} from "../uttility";

import './styles.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
    editorState: EditorState;
    openBox: (val: NewPostBox) => void
    setEditorState: (val: EditorState) => void;
}

const NoteEditor: FC<Props> = ({className, ...props}) => {
    const {editorState, setEditorState, openBox, ...others} = props;
    const editor = useRef<Editor>(null);

    const handleKeyCommand = (cmd: DraftEditorCommand, state: EditorState) => {
        const newState = RichUtils.handleKeyCommand(state, cmd);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };


    const mapKeyToEditorCommand = (e: KeyboardEvent<{}>) => {
        return getDefaultKeyBinding(e);
    };

    const onTab = (e: KeyboardEvent<{}>) => {
        const maxDepth = 4;
        setEditorState(
            RichUtils.onTab(e, editorState, maxDepth)
        );
    };

    const onFocus = (e: KeyboardEvent<{}>) => {
        openBox("open");
    };

    const onBlur = (e: KeyboardEvent<{}>) => {
        openBox(cssWrapper(editorState));
    };

    const toggleBlockType = (
        type: DraftInlineStyleType | DraftBlockType,
        toggle: 'toggleInlineStyle' | 'toggleBlockType' = 'toggleBlockType'
    ) => {
        setEditorState(
            RichUtils[toggle](editorState, type)
        )
    };

    return (
        <div {...others} className={classes('note_editor', className)}>
            <Editor
                ref={editor}
                editorState={editorState}
                placeholder={'Take a note...'}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={mapKeyToEditorCommand}
                onTab={onTab}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={setEditorState}
            />
        </div>
    );
};

export default NoteEditor;

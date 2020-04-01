import React, {useEffect, useState, useRef} from "react";

import {
    Editor,
    EditorState,
    RichUtils,
    DraftEditorCommand,
    DraftHandleValue,
    getDefaultKeyBinding,
    convertFromRaw,
    convertToRaw,
} from 'draft-js';

import {
    BLOCK_TYPES,
    INLINE_STYLES,
    generateUUID
} from "../shared";

import {
    ControlsProps,
    EditorButtonProps,
    NoteEditorProps,
    SyntheticKeyboardEvent
} from "../types";


const EditorButton = (props: EditorButtonProps) => {
    const {active, label, style, icon, onToggle} = props;

    return (
        <button className={`editor-btn ${active && 'active'}`}
                aria-label={label}
                title={label}
                onMouseDown={() => onToggle(style)}>
            {icon}
        </button>
    );
};

const BlockStyleControls = ({editorState, onToggle}: ControlsProps) => {
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    const buttonSet = BLOCK_TYPES.map(({label, icon, style}) =>
        <EditorButton
            key={label}
            active={style === blockType}
            label={label}
            icon={icon}
            onToggle={onToggle}
            style={style}
        />
    );

    return (
        <div className="editor-controls">
            {buttonSet}
        </div>
    );
};

const InlineStyleControls = ({editorState, onToggle}: ControlsProps) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    console.log(`Current styles:`, currentStyle);
    const buttonSet = INLINE_STYLES.map(({label, style, icon}) =>
        <EditorButton
            key={label}
            active={currentStyle.has(style)}
            label={label}
            icon={icon}
            onToggle={onToggle}
            style={style}
        />
    );

    return (
        <div className="editor-controls">
            {buttonSet}
        </div>
    );
};

export default function NoteEditor({
                                       data,
                                       cancel,
                                       handleNote
                                   }: NoteEditorProps) {
    const state = !!data ?
        EditorState.createWithContent(convertFromRaw(data.editorState)) :
        EditorState.createEmpty();

    // console.log(state);

    const [editorState, setEditorState] = useState<EditorState>(
        state
    );

    const editor = useRef<Editor>(null);

    useEffect(() => editor.current?.focus(), []);

    // useEffect(() => console.log(editorState.toJS()));

    const handleKeyCommand = (cmd: DraftEditorCommand, state: EditorState): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(state, cmd);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const mapKeyToEditorCommand = (e: SyntheticKeyboardEvent) => {
        return getDefaultKeyBinding(e);
    };

    const passedNote = () => {
        !data ? handleNote({
                id: generateUUID(),
                created: +new Date(),
                changed: +new Date(),
                inTrashed: false,
                selected: false,
                inArchive: false,
                editorState: convertToRaw(editorState.getCurrentContent())
            }) :
            handleNote({
                ...data,
                ...{editorState: convertToRaw(editorState.getCurrentContent())}
            })

    };

    const logged = () => {
        console.log(editorState.getSelection());
    };

    return (
        <div className={'note-editor'}>
            <div className="row">

                <InlineStyleControls
                    editorState={editorState}
                    onToggle={type => setEditorState(
                        RichUtils.toggleInlineStyle(editorState, type)
                    )}/>

                <BlockStyleControls
                    editorState={editorState}
                    onToggle={type => setEditorState(
                        RichUtils.toggleBlockType(editorState, type)
                    )}/>

            </div>

            <Editor
                ref={editor}
                placeholder={'Take a note...'}
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={mapKeyToEditorCommand}
            />

            <div className={'bottom-controls'}>
                <button onClick={logged}>{'Add'}</button>
                <button onClick={cancel}>{'Cancel'}</button>
            </div>
        </div>
    );
}

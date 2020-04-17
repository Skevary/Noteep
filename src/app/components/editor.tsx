import React, {useState, useRef} from "react";

import {
    Editor,
    EditorState,
    RichUtils,
    DraftEditorCommand,
    DraftHandleValue,
    getDefaultKeyBinding,
} from 'draft-js';


import {
    ControlsProps,
    EditorButtonProps,
    NoteEditorProps,
    BLOCK_TYPES,
    INLINE_STYLES
} from "../libs";

import {Icon} from "./icon";


const EditorButton = (props: EditorButtonProps) => {
    const {active, label, style, icon, onToggle} = props;

    return (
        <button className={`icon-btn ${active && 'active'}`}
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
            icon={<Icon name={icon}/>}
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
            icon={<Icon name={icon}/>}
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

export default ({data, winOpen, handleNote, changeWinState}: NoteEditorProps) => {

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const editor = useRef<Editor>(null);

    const handleKeyCommand = (cmd: DraftEditorCommand, state: EditorState): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(state, cmd);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const mapKeyToEditorCommand = (e: any) => {
        return getDefaultKeyBinding(e);
    };

    const logged = () => {
        // console.log(editorState.getSelection());
        console.log(editor);
    };

    return (
        <div className={winOpen ? 'note-editor open' : 'note-editor'}
             onClick={e => changeWinState(true)}>

            {  winOpen &&
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
            }

            <Editor
                ref={editor}
                placeholder={'Take a note...'}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={mapKeyToEditorCommand}
                editorState={editorState}
                onChange={setEditorState}
            />

          <div className={'bottom-controls'}>
                <button
                    className={'btn'}
                    onClick={logged}>
                    {'Add'}
                </button>

                <button
                    className={'btn'}
                    onClick={e => {
                        e.stopPropagation();
                        changeWinState(false);
                    }}>
                    {'Cancel'}
                </button>
            </div>
        </div>
    );
};


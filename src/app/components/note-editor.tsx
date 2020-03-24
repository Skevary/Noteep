import React, {useEffect, useState, useRef} from "react";
import Draft, {
    Editor,
    EditorState,
    RichUtils,
    getDefaultKeyBinding,
    DraftEditorCommand, DraftHandleValue, convertFromRaw, convertToRaw,
} from 'draft-js';
import Button from '@material-ui/core/Button';
import {Icon, IconButton} from "@material-ui/core";
import {
    BLOCK_TYPES, INLINE_STYLES,
    ControlsProps,
    EditorButtonProps,
    SyntheticKeyboardEvent, NoteEditorProps
} from "../shared";
import {generateUUID} from "../shared/utility";


const EditorButton = (props: EditorButtonProps) => {
    const {active, label, style, icon, onToggle} = props;

    return (
        <IconButton className={`editor-btn ${active && 'active'}`}
                    aria-label={label}
                    size={"small"}
                    title={label}
                    onMouseDown={() => onToggle(style)}>
            {icon}
        </IconButton>
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

    console.log(state);

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

    return (
        <div className={'note-editor'}>
            <div className="row">
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={type => setEditorState(RichUtils.toggleInlineStyle(editorState, type))}
                />

                <BlockStyleControls
                    editorState={editorState}
                    onToggle={type => setEditorState(RichUtils.toggleBlockType(editorState, type))}
                />
            </div>

            <Editor
                ref={editor}
                placeholder={'Take a note...'}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={mapKeyToEditorCommand}
                editorState={editorState}
                onChange={setEditorState}
            />

            <div className={'bottom-controls'}>
                <Button
                    onClick={passedNote}
                    size="small"
                    variant="contained"
                    color="primary">
                    Add
                </Button>

                <Button
                    onClick={() => cancel()}
                    size="small"
                    variant="contained">
                    Cancel
                </Button>
            </div>
        </div>
    );
}

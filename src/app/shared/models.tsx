import React from "react";
import {convertToRaw, DraftBlockType, EditorState, RawDraftContentState} from "draft-js";

export type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;

export type EditorButtonProps = {
    active: boolean;
    label: string;
    style: string;
    icon: any;
    onToggle: (inlineStyle: DraftBlockType) => any
}

export type ControlsProps = {
    editorState: EditorState;
    onToggle: (inlineStyle: DraftBlockType) => any
};


export type NoteEditorProps = {
    handleNote: (val :NoteInstance) => void;
    cancel: () => any;
    data: NoteInstance | null;
}

export interface NoteInstance {
    id: string;
    created: number;
    changed: number;
    selected: boolean;
    inArchive: boolean;
    inTrashed: boolean;
    editorState: RawDraftContentState;
}

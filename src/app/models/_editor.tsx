import {DraftBlockType, EditorState, RawDraftContentState} from "draft-js";

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
    data?: NoteInstance | null;
    winOpen: boolean;
    handleNote?: (val: NoteInstance) => void;
    changeWinState: (val: boolean) => any;
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

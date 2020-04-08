/*
*   approximate possible models
*/
/*
type NoteState = {
    uid: string;
    location: 'pinned' | 'others' | 'archive' | 'graveyard';
    createdDate: number;
    lastEditTime: number;
    labels: string[];
    attachedImages: string[]
    attachedLinks: {
        previewImg: string;
        name: string;
        url: string;
    }[];
    header: string;
    editorState: any; // Editor State


    trashExpireTime?: number;
}

type NoteView = {
    state: NoteState;
    type: 'note' | 'article';
    hashcode: string;
    position: number;
    color: string;

    selected: boolean;
    view: 'compact' | 'full' | 'edit';
}*/

export default {};

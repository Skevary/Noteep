import React, {FC, useCallback, useMemo, useState} from "react";

import {
    getFromLS,
    putInLS,
    useEffectWithDebounce,
} from "../../shared/utility";

import {Button, PageBlock} from "../../shared/ui";
import {Post} from "../../store/posts";

import NoteEditor from "../editor";
import Editor, {createNewPost, cssWrapper} from "../uttility";
import {NewPostBox} from "../models";

import './styles.scss';


interface Props {
    addNewNote: (v: Post) => any;
}

// Note Post component
const NewNote: FC<Props> = ({addNewNote, ...props}) => {
    const [editorState, setEditorState] = useState(() => {
        const editor = getFromLS('nwPstEdtr');
        return !!editor ? Editor.createFromRaw(editor) : Editor.empty()
    });

    const [box, setBox] = useState<NewPostBox>(
        getFromLS('nwPstBox') || cssWrapper(editorState)
    );

    // save temp state to localstorage
    useEffectWithDebounce(
        () => putInLS(Editor.createRaw(editorState), 'nwPstEdtr'),
        1000, [editorState]
    );

    // save css container to localstorage
    useEffectWithDebounce(
        () => putInLS(box, 'nwPstBox'),
        1000, [box]
    );

    console.log('@New Note Rerender');

    const attachHandler = (type: string) => console.log(type);

    const postHandler = useCallback(() => {
        setEditorState(Editor.empty()); // reset editor state
        addNewNote(createNewPost(editorState)); // pass new Post
    }, [editorState, addNewNote]);

    return (
        <PageBlock className={`post_new_note ${box}`}>

            <NoteEditor
                className={box}
                openBox={setBox}
                editorState={editorState}
                setEditorState={setEditorState}
            />

            <div className="submit_post">
                <div className="page_add_media">
                    <Button
                        icon={'Picture'}
                        onClick={() => attachHandler('Image')}
                        title={'Image'}
                        className={'transparent'}
                    />

                    <Button
                        icon={'Box'}
                        onClick={() => attachHandler('Link')}
                        title={'Link'}
                        className={'transparent'}
                    />

                    <Button
                        icon={'BookmarkAlt'}
                        onClick={() => attachHandler('Article')}
                        title={'Article'}
                        className={'transparent'}
                    />
                </div>

                <div className="add_post_wrap">
                    <Button
                        onClick={postHandler}
                        title={'Add post'}
                        className={'brand'}
                        children={'Post'}
                    />
                </div>
            </div>
        </PageBlock>
    )
};


export default NewNote;

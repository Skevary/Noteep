import {createSlice} from "@reduxjs/toolkit";
import {RawDraftContentState} from "draft-js";
import {getFromLS} from "../shared/utility";

export interface Post {
    id: string;
    createdDate: number;
    trashedDate?: number;
    archiveDate?: number;
    rawData: RawDraftContentState;
}

export interface PostsState {
    posts: Post[];
    archive: Post[];
    trashed: Post[];
    orderBy: 'createdDate'
}

const initialState: PostsState = {
    posts: getFromLS('ttlPsts') || [],
    archive: getFromLS('archPsts') || [],
    trashed: getFromLS('trshPsts') || [],
    orderBy: 'createdDate'
};

export default createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPost(state, {payload}) {
            state.posts.push(payload);
        },
        removePost(state, {payload}) {
            const post = state.posts.slice(payload.id, 1);
            console.log(post);
            state.trashed.push(...post);
        }
    }
});

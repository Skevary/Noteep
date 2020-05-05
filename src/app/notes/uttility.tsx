import {
    convertFromRaw as fromRaw,
    convertToRaw as toRaw,
    EditorState as ES,
    RawDraftContentState as RS,
} from "draft-js";

import {NewPostBox} from "./models";
import {Post} from "../store/posts";
import {uuid} from "../shared/utility";


export const cssWrapper = (state: ES): NewPostBox =>
    EditorUtil.areEmpty(state) ? 'open' : 'collapsed';


export const createNewPost = (state: ES): Post => ({
    id: uuid(),
    createdDate: +new Date(),
    rawData: EditorUtil.createRaw(state)
});


export default class EditorUtil {
    // Raw shortener
    static convert = {fromRaw, toRaw};


    // Check editor has have content
    static areEmpty = (state: ES): boolean =>
        state.getCurrentContent().hasText();

    // Raw State -> Editor State
    static createFromRaw = (state: RS): ES =>
        ES.createWithContent(fromRaw(state));

    // Editor State -> Raw State
    static createRaw = (state: ES): RS =>
        toRaw(state.getCurrentContent());

    // Create Empty State
    static empty = (): ES => ES.createEmpty();
}

import React, {useState} from 'react';
import NoteEditor from "./components/note-editor";
import {NoteInstance} from "./shared";
import {EditorState} from "draft-js";

const NOTES_KEYS = 'notes-idx';

function getNotesKeys(): string[] {
    const keys = localStorage.getItem(NOTES_KEYS) || '[]';
    return JSON.parse(keys);
}

function setNotesKeys(val: string[]) {
    console.log(val);
    localStorage.setItem(NOTES_KEYS, JSON.stringify(val));
}

function getNotesStorage(id: string): NoteInstance {
    const note = localStorage.getItem(id) || '{}';
    return JSON.parse(note);
}

function setNotesStorage(val: NoteInstance) {
    localStorage.setItem(val.id, JSON.stringify(val));
}

export default function App() {
    const [keys, setKeys] = useState<string[]>(getNotesKeys);
    const [notes, setNotes] = useState<NoteInstance[]>(getTotalNotes);

    const saveNote = (val: NoteInstance) => {
        console.log(val);
        const _keys = [...keys, val.id];
        setKeys(_keys);
        setNotesKeys(_keys);
        setNotesStorage(val);
    };

    function getTotalNotes() {
        const totalNotes = keys.map(v => getNotesStorage(v));
        console.log(totalNotes);
        return totalNotes;
    }

    const hideNote = () => {
        console.log('Hide Note');
    }

    return (
        <div className='app'>
            <div className="top-bar">

            </div>

            <main>
                <NoteEditor data={null} handleNote={saveNote} cancel={hideNote}/>

                <div className="content">
                    {notes.map(v => <NoteEditor key={v.id} data={v} handleNote={saveNote} cancel={hideNote}/>)}
                </div>
            </main>
        </div>
    );
}


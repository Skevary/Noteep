import React, {useState} from "react";
import {Cross, Search} from "../icons";


type Props = {}

export default function SearchBar(props: Props) {
    const [input, setInput] = useState<string>('');


    return (<div className={'Search'}>
        <span className="icon-btn" style={{left: 0}}>
            <Search />
        </span>

        <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={'Search...'}
        />

        {input &&
        <button
            className="icon-btn"
            style={{right: 0}}
            onClick={() => setInput('')} >
            <Cross />
        </button>}
    </div>)
}

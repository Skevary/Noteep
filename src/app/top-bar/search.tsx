import React, {useState} from "react";
import SvgIcon from "../svg-icon";

type Props = {}

export default function SearchBar(props: Props) {
    const [input, setInput] = useState<string>('');

    return (<div className={'Search'}>
        <span className="embedded-btn" style={{left: 0}}>
            <SvgIcon icon={'Search'} />
        </span>

        <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={'Search...'}
        />

        {input && <button
            className="embedded-btn"
            style={{right: 0}}
            onClick={() => setInput('')}>
            <SvgIcon icon={'Cross'} />
        </button>}
    </div>)
}

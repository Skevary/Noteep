import React from "react";
import SvgIcon from "../svg-icon";

type Props = {}

export default function Footer(props: Props) {
    const goTo = (url: string, target?: string) => window.open(url, target);

    return (<footer>
        <button
            className="btn-row"
            title={'Author github account'}
            onClick={() => goTo('https://github.com/Skevary', '_blank')}>
            <div className={'wrapper'}>
                <SvgIcon icon={'Github'}>{'Github'}</SvgIcon>
                <span className="trim-text">{'Github'}</span>
            </div>
        </button>

        <button
            className="btn-row"
            title={'Author gmail account'}
            onClick={() => goTo('mailto:araievskyi@gmail.com')}>
            <div className={'wrapper'}>
                <SvgIcon icon={'Gmail'} style={{width: '1.75em', height: '1.75em'}}/>
                <span className="trim-text">{'Gmail'}</span>
            </div>
        </button>
    </footer>)
}

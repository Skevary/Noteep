import React from "react";
import {SvgIcon} from "../../components";

type Props = {}

const Footer = (props: Props) => {
    const goTo = (url: string, target?: string) => window.open(url, target);

    return (<footer>
        <div
            className="item"
            title={'Author github account'}
            onClick={() => goTo('https://github.com/Skevary', '_blank')}>
        <span className="icon-btn">
                <SvgIcon icon={'Github'} />
        </span>
            <span className="text trim-text">{'Github'}</span>
        </div>

        <div
            className="item"
            title={'Author gmail account'}
            onClick={() => goTo('mailto:araievskyi@gmail.com')}>
        <span className="icon-btn">
                <SvgIcon icon={'Gmail'}  style={{width: '1.75em', height: '1.75em'}}/>
        </span>
            <span className="text trim-text">{'Gmail'}</span>
        </div>

    </footer>)
};

export default Footer;

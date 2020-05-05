import React, {FC, memo} from "react";

import {Button} from "../../shared/ui/button";

const Footer: FC = memo(() => {
    console.log(`@Footer rerender`);
    return (
        <footer>
            <Button
                tag={'span'}
                className={'item'}
                title='Author github account'
                icon={'Github'}
                onClick={() => window.open('https://github.com/Skevary', '_blank')}>
                {'Github'}
            </Button>
            <Button
                tag={'span'}
                className={'item'}
                title='Author gmail account'
                icon={'Gmail'}
                onClick={() => window.open('mailto:araievskyi@gmail.com')}>
                {'Gmail'}
            </Button>
        </footer>
    )
});


export default Footer;

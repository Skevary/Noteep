import React, {FC, memo} from "react";

import './styles.scss'

const Main: FC = memo(({children}) => {
    console.log(`@@Main rerender: `);

    return (
        <main className={'Main'}>
            {children}
        </main>
    )
});

export default Main;

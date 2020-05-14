import React, {FC} from "react";
import {Icon} from "../icon";
import './styles.scss';

export const Loading: FC = () => {
    return (
        <Icon
            name={'Spinner'}
            className={'spinner'}
        />
    );
};

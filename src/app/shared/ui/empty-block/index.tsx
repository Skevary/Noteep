import React, {FC} from "react";
import {Icon, IconName} from "../icon";
import {PageBlock} from "../containers";

import './styles.scss';

type Props = {
    icon: IconName
    message: string;
}

export const InitBox: FC<Props> = ({icon, message}) => {
    return (
        <PageBlock className={'init_box'}>
            <Icon name={icon} />
            <span className="message">
                {message}
            </span>
        </PageBlock>
    )
};

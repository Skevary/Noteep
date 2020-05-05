import React, {FC, HTMLAttributes, memo} from "react";
import {classes} from "../../utility";
import {Icon, IconName} from "..";

import './styles.scss';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
    tag?: keyof JSX.IntrinsicElements;
    icon?: IconName;
}

export const Button: FC<Props> = memo(({children, className, ...props}) => {
    const {icon, tag: Tag = 'button', ...others} = props;

    return (
        <Tag {...others} className={classes('Btn', className)}>
            {icon && <Icon name={icon}/>}
            {children && <span className={'text trim-text'}>{children}</span>}
        </Tag>
    );
});

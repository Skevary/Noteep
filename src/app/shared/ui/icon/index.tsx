import React, {FC, SVGProps, memo, useMemo} from "react";
import {classes} from "../../utility";
import * as Icons from "../../icons";

import './styles.scss';

export type IconName = keyof typeof Icons ;

interface Props extends SVGProps<SVGSVGElement> {
    name: IconName;
}

export const Icon: FC<Props> = memo(({name, ...props}) => {
    const SvgIcon = useMemo(() => Icons[name], [name]);
    return <SvgIcon {...props} className={classes('Icon', props.className)} />
});


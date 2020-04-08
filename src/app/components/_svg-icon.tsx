import React from "react";
import * as Icons from './icons'
import {Icon} from "../models";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    icon: Icon;
}

const SvgIcon = (props: SvgIconProps) => {
    const Icon = (Icons as any)[props.icon];
    return (<Icon {...props} />)
};

export default SvgIcon;

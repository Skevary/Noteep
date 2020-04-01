import React from "react";
import {Icon} from "./top-bar/model";
import * as Icons from './icons'

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    icon: Icon;
}

export default function SvgIcon(props: SvgIconProps) {
    const Icon = (Icons as any)[props.icon];
    return (<Icon {...props}/>)
}

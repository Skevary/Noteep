import React, {FC} from "react";
import {IconName} from "../../shared/ui";


type Props = {
    active: boolean;
    label: string;
    style: any;
    icon: IconName;
    onToggle: (v?: any) => any;
}

const StyleButton: FC < Props > = props => {
    const {active, label, style, icon, onToggle} = props;

    return (
        <button className={`editor-btn ${active && 'active'}`}
                aria-label={label}
                title={label}
                onMouseDown={() => onToggle(style)}>
            {icon}
        </button>
    );
};

export default StyleButton;

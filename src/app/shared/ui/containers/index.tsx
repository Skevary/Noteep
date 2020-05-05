import React, {FC} from "react";
import {classes, HtmlElement, IconName} from "../..";
import {InitBox} from "../empty-block";

import './styles.scss';

type Props = {} & HtmlElement;

export const PageContainer: FC<Props> = ({children, className, ...props}) => {
    console.log('**PageContainer reinit');
    return (
        <section {...props} className={classes('page_container', className)}>
            {children}
        </section>
    )
};

type PostsProps = {
    noContent: boolean;
    initIcon: IconName;
    initMsg: string;
} & Props;

export const PostsWrapper: FC<PostsProps> = ({children, className, ...props}) => {
    const {noContent, initIcon, initMsg, ...others} = props;
    console.log('**PostsWrapper reinit');
    return (
        <div {...others} className={classes('posts_wrapper', className)}>
            {!noContent ? children : (
                <InitBox
                    icon={initIcon}
                    message={initMsg}
                />
            )}
        </div>
    )
};

export const PageBlock: FC<Props> = ({children, className, ...props}) => {
    return (
        <div {...props} className={classes('page_block', className)}>
            {children}
        </div>
    )
};

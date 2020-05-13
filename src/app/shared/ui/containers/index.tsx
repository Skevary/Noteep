import React, {FC, useLayoutEffect} from "react";
import {classes, HtmlElement, IconName, useAppDispatch} from "../..";
import {InitBox} from "../empty-block";

import {actions, RootState} from "../../../store";
import {useSelector} from "react-redux";

import './styles.scss';

type Props = {} & HtmlElement;

export const PageContainer: FC<Props> = ({children, className, ...props}) => {
    const view = useSelector(({core}: RootState) => core.viewMode);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(actions.core.changeLoadIndicator('ready'))
    }, []);

    console.log('**PageContainer reinit');

    return (
        <section {...props}
                 className={classes('page_container', className)}
                 data-view-mode={view}>
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

import React, {FC} from "react";
import {useSelector} from "react-redux";

import NewNote from "../../notes/new-note";
import Preview from "../../notes/preview/preview";
import {PageContainer, PostsWrapper} from "../../shared/ui/containers";
import {actions, RootState} from "../../store";
import {putInLS, useAfterEffect, useAppDispatch} from "../../shared/utility";

import './styles.scss';

const HomePage: FC = () => {
    const {posts, orderBy} = useSelector(({posts}: RootState) => posts);
    const dispatch = useAppDispatch();

    // Save In Local Storage
    useAfterEffect(() => {
        putInLS(posts, 'ttlPsts');
    }, [posts]);


    // Sort order by date created
    const postsByOrder = () => [...posts]
        .sort(({[orderBy]: a}, {[orderBy]: b}) => b - a)
        .map((post) => <Preview key={post.id} post={post}/>);


    return (
        <PageContainer id={'pgHome'}>

            <NewNote addNewNote={
                v => dispatch(actions.posts.addNewPost(v))
            }/>

            <PostsWrapper
                noContent={!posts.length}
                initIcon={"Light"}
                initMsg={'Notes you add appear here'}>
                {postsByOrder()}
            </PostsWrapper>

        </PageContainer>
    )
};

export default HomePage;

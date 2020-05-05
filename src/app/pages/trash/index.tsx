import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {PageContainer, PostsWrapper} from "../../shared/ui/containers";
import {useAppDispatch} from "../../shared/utility";

import './styles.scss';

const TrashPage: FC = () => {
    const {trashed, orderBy} = useSelector(({posts}: RootState) => posts);
    const dispatch = useAppDispatch();

    return (
        <PageContainer id={'pgTrash'}>
            <PostsWrapper
                noContent={!trashed.length}
                initIcon={'Trash'}
                initMsg={'Your archived notes appear here'}>
            </PostsWrapper>
        </PageContainer>
    )
};

export default TrashPage;

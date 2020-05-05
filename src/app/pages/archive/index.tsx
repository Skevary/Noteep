import React, {FC} from "react";
import {useSelector} from "react-redux";
import {PageContainer, PostsWrapper} from "../../shared/ui/containers";
import {RootState} from "../../store";
import {useAppDispatch} from "../../shared/utility";

import './styles.scss'

const ArchivePage: FC = () => {
    const {archive, orderBy} = useSelector(({posts}: RootState) => posts);
    const dispatch = useAppDispatch();

    return (
        <PageContainer id={'pgArchive'}>
            <PostsWrapper
                noContent={!archive.length}
                initIcon={'Box'}
                initMsg={'No notes in Trash'}>
            </PostsWrapper>
        </PageContainer>
    )
};

export default ArchivePage;

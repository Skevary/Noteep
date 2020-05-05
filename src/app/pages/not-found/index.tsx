import React, {FC} from "react";
import {PageContainer, PostsWrapper} from "../../shared/ui/containers";
import {navigate, useTitle} from "hookrouter";

import './styles.scss';

const NotFoundPage: FC = () => {
    navigate('404-page-not-found', true);
    useTitle('Error 404: Page Not Found');
    // setTimeout(() => {
    //     navigate('/', true);
    // }, 5000);
    return (
        <PageContainer id={'pg404'}>
            <PostsWrapper
                noContent={true}
                initIcon={'Cross'}
                initMsg={'Error 404: Page Not Found'}>
            </PostsWrapper>
        </PageContainer>
    )
};

export default NotFoundPage;

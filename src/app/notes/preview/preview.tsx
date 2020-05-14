import React, {FC, useMemo, useState} from "react";
import {RawDraftContentState} from "draft-js";
import {render} from "./renders";

import {Button} from "../../shared/ui/button";
import './styles.scss';
import {PageBlock} from "../../shared/ui/containers";
import {Post} from "../../store/posts";
import {IconName} from "../../shared/ui/icon";

type Props = {
    post: Post;
}

const getPreviewRaw = (raw: RawDraftContentState) => ({
    blocks: raw.blocks.length > 2 ? [raw.blocks[0], raw.blocks[1]] : raw.blocks,
    entityMap: raw.entityMap,
    type: raw.blocks.length > 2 ? 'preview' : 'full'
});

const controls: { icon: IconName, title: string }[] = [
    {icon: 'Trash', title: 'Remove Post'},
    {icon: 'Box', title: 'Archive Post'},
    {icon: 'Pin', title: 'Pin Post'},
];

const Preview: FC<Props> = ({post}) => {
    const [data, setData] = useState(getPreviewRaw(post.rawData));
    const rendered = useMemo(() => render(data), [data]);
    const attachHandler = (type: string) => console.log(type);

    return (
        <PageBlock className={'post_preview'}>
            <div className="post-header">
                <div className="meta">
                    <span className="date" title={'Created at'}>
                        {new Date(post.createdDate).toLocaleString('Ru')}
                    </span>
                </div>
                <div className="ctrls">
                  {controls.map(({icon, title}) =>
                      <Button
                          key={`${title}_${icon}`}
                          icon={icon}
                          onClick={() => attachHandler(`${title} ${post.id}`)}
                          title={title}
                          className={'transparent'}
                      />
                  )}
              </div>
            </div>
            <div className="post-content">
                <div className="content markup">
                    {rendered}
                </div>
                {data.type === 'preview' && (
                    <Button
                        style={{padding: '.15em', fontSize: '.85em'}}
                        onClick={() => setData({...post.rawData, type: 'full'})}>
                        {'Expand text…'}
                    </Button>
                )}
            </div>
        </PageBlock>
    )
};

export default Preview;

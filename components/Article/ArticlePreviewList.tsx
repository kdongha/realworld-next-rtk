import React, { FunctionComponent } from 'react';
import ArticlePreview from './ArticlePreview';

type ArticlePreviewListProps = {};

const ArticlePreviewList: FunctionComponent<ArticlePreviewListProps> = (props) => {
    const list: any[] = [1, 2];
    return (
        <ul>
            {list.map((article, idx) => (
                <ArticlePreview key={`article${idx}`} />
            ))}
        </ul>
    );
};

export default ArticlePreviewList;

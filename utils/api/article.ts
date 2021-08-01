import { DEFAULT_LIMIT, SERVER_BASE_URL } from '../constant';
import axios from 'axios';

export const getArticle = ({
    page = 1,
    limit = DEFAULT_LIMIT,
    author,
    tag,
    favorited,
}: {
    page?: number;
    limit?: number;
    author?: string;
    tag?: string;
    favorited?: string;
}) => {
    let url = `${SERVER_BASE_URL}/api/articles?offset=${(page - 1) * limit}&limit=${limit}`;
    if (author) {
        url += `&author=${author}`;
    } else if (tag) {
        url += `&tag=${tag}`;
    } else if (favorited) {
        url += `&author=${favorited}`;
    }
    return axios.get(url);
};

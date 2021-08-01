import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface Article {
    tagList: string[];
    createdAt: number;
    author: Author;
    description: string;
    title: string;
    body: string;
    slug: string;
    updatedAt: number;
    favoritesCount: number;
    favorited: boolean;
}

export interface ArticleState {
    articles: Article[];
    articlesCount: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ArticleState = {
    articles: [],
    articlesCount: 0,
    status: 'idle',
};

import { Post } from '@/types/post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], number | void>({
            query: (page = 1) => `posts?_page=${page}&_limit=10`,
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;

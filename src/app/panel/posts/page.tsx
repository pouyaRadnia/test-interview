'use client';

import { useGetPostsQuery } from '@/store/reducers/posts';

export default function Posts() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetPostsQuery(
        name,
        {
            pollingInterval: 10000,
        }
    );
    console.log(data && data);
    return <div>Posts</div>;
}

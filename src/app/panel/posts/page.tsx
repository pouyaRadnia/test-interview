'use client';

import PostsList from '@/container/postsList';
import { useGetPostsQuery } from '@/store/reducers/posts';
import { useQueryValue } from '@/utils/use-query-value';
import { CircularProgress, Pagination } from '@mui/material';

export default function Posts() {
    const [[currentPage], setCurrentPageArray] = useQueryValue('page', [1], {
        serializer: (page: number) => String(page),
        deserializer: (page: string) => +page,
    });
    const { data, error, isLoading, isFetching, isSuccess, isError } =
        useGetPostsQuery(Number([currentPage]), {
            pollingInterval: 10000,
        });

    if (isLoading || isFetching)
        return (
            <div className="grid h-screen place-items-center">
                <CircularProgress />
            </div>
        );
    if (isError) {
        <div className="grid h-screen place-items-center">
            Somthing went rong
        </div>;
    }

    return (
        <div>
            <PostsList data={data ? data : []} />
            <div className="grid  place-items-center mb-4">
                <Pagination
                    count={10}
                    page={+currentPage}
                    onChange={(_e, value) => {
                        setCurrentPageArray([value]);
                    }}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
}

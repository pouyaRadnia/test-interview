'use client';

import CommentList from '@/container/comment-list';
import { useGetPostCommentQuery } from '@/store/reducers/posts';
import { CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';

export default function PostComments({ params }: { params: any }) {
    const { id } = params;
    const { data, isLoading, isError, isFetching } = useGetPostCommentQuery(
        +id
    );

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
            <CommentList data={data ? data : []} />
        </div>
    );
}

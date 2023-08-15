'use client';

import { PostItem } from '@/components/PostItem';
import { Post } from '@/types/post';

export default function PostsList({ data }: { data: Post[] }) {
    return (
        <div style={{ padding: '1rem 5rem' }}>
            {data.map((item) => (
                <PostItem key={item.id} title={item.title} body={item.body} />
            ))}
        </div>
    );
}

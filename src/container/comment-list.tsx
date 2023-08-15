import CommentItem from '@/components/CommentItem';
import { Comment } from '@/types/post';
import { data } from 'autoprefixer';

export default function CommentList({ data }: { data: Comment[] }) {
    return (
        <>
            {data.map((item) => (
                <CommentItem
                    key={item.id}
                    email={item.email}
                    name={item.name}
                    body={item.body}
                />
            ))}
        </>
    );
}

'use client';

import { Path } from '@/constans/enum';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import Link from 'next/link';

export function PostItem({
    title,
    body,
    id,
}: {
    title: string;
    body: string;
    id: number;
}) {
    return (
        <>
            <Link href={`${Path.Posts}/${String(id)}`}>
                <Card style={{ margin: '2rem' }}>
                    <CardContent>
                        <Typography> {title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {body}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </>
    );
}

'use client';

import { Card, CardContent, Typography, CardHeader } from '@mui/material';

export function PostItem({ title, body }: { title: string; body: string }) {
    return (
        <>
            <Card style={{ margin: '2rem' }}>
                <CardContent>
                    <Typography> {title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

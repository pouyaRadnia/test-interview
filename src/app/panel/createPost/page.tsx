'use client';

import { Create_Post } from '@/types/post';
import { TextField, Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function CreatePosts() {
    const form = useForm<Create_Post>({
        defaultValues: {
            title: '',
            body: '',
        },
    });
    const { register, handleSubmit, formState, control } = form;
    const { errors } = formState;
    const onSubmit = (data: Create_Post) => {
        console.log(data);
    };
    return (
        <div className="grid place-items-center">
            <h1 className="my-4">create post</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2} width={400}>
                    <TextField
                        label="Title"
                        type="text"
                        {...register('title', {
                            required: 'Title is required',
                        })}
                        error={!!errors.title}
                        helperText={errors?.title?.message}
                    />
                    <TextField
                        label="Content"
                        type="text"
                        {...register('body', {
                            required: 'Content is required',
                        })}
                        error={!!errors.body}
                        helperText={errors?.body?.message}
                    />
                    <Button type="submit">Create Post</Button>
                </Stack>
            </form>
        </div>
    );
}

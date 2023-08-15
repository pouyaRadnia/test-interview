import {
    Avatar,
    Card,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import React from 'react';

export default function CommentItem({
    email,
    name,
    body,
}: {
    name: string;
    email: string;
    body: string;
}) {
    return (
        <Card>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={email}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {name}
                            </Typography>
                            {body}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </Card>
    );
}

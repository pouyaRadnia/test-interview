import { Path } from '@/constans/enum';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function DashboardHeader() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                ></IconButton>
                <Typography
                    style={{ marginRight: '2rem' }}
                    variant="h6"
                    color="inherit"
                    component="div"
                >
                    <Link href={Path.Posts}>posts</Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div">
                    <Link href={Path.CreatePost}> create post</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

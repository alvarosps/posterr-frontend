import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { PostsContext } from '../../contexts/PostsContext';
import Post from '../Post/Post';
import ErrorDialog from '../ErrorDialog/ErrorDialog';

const PostList = () => {
    const { posts, searchTerm } = useContext(PostsContext);

    if (posts.length === 0 && searchTerm) {
        return <ErrorDialog message="No posts found for your search." />;
    }

    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 2,
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: 'background.default',
                '& > div': {
                    textAlign: 'center',
                    color: 'text.secondary',
                },
            }}
        >
            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid item xs={12} key={post.id}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PostList;

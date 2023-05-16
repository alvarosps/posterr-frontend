import React, { useState, useContext } from 'react';
import { Card, TextField, Button } from '@mui/material';
import { PostsContext } from '../../contexts/PostsContext';
import { createPost } from '../../services/api/posts';

const NewPostForm = () => {
    const [postContent, setPostContent] = useState('');
    const [error, setError] = useState(false);
    const { addPost } = useContext(PostsContext);

    const handleInputChange = (event) => {
        setPostContent(event.target.value);
        setError(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (postContent.length > 777) {
            setError(true);
            return;
        }
        try {
            const mockUserId = 1;
            const newPost = await createPost({
                user_id: mockUserId,
                content: postContent,
                repost_id: null,
            });
            if (newPost) {
                addPost(newPost.data);
                setPostContent('');
            }
        } catch (error) {
            console.error('Failed to create a post:', error);
        }
    };

    return (
        <Card
            sx={{
                padding: 2,
                marginBottom: '20px',
            }}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Write a post"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={postContent}
                    onChange={handleInputChange}
                    error={error}
                    helperText={
                        error
                            ? 'Post content exceeds the maximum limit of 777 characters'
                            : ''
                    }
                    fullWidth
                    sx={{
                        marginBottom: '10px',
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Post
                </Button>
            </form>
        </Card>
    );
};

export default NewPostForm;

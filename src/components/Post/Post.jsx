import React, { useState, useContext } from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PostsContext } from '../../contexts/PostsContext';
import RepostConfirmation from '../RepostConfirmation/RepostConfirmation';
import ErrorDialog from '../ErrorDialog/ErrorDialog';

const Post = ({ post }) => {
    const [openRepostConfirmation, setOpenRepostConfirmation] = useState(false);
    const { repostPost: repostPostInContext } = useContext(PostsContext);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRepostClick = () => {
        setOpenRepostConfirmation(true);
    };

    const handleRepostConfirmationClose = () => {
        setOpenRepostConfirmation(false);
    };

    const handleRepostConfirm = async () => {
        repostPostInContext(post.id, (errorMessage) => {
            setErrorMessage(errorMessage);
            setOpenErrorDialog(true);
        });
        setOpenRepostConfirmation(false);
    };

    return (
        <>
            <Card
                sx={{
                    marginBottom: '20px',
                    '& .MuiCardContent-root': {
                        paddingBottom: '16px',
                    },
                }}
            >
                <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                        {post.username}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {post.content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {new Date(post.created_at).toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Reposts: {post.repost_count}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRepostClick}
                        disabled={post.repost_id}
                        startIcon={<RepeatIcon />}
                    >
                        Repost
                    </Button>
                </CardActions>
            </Card>
            <RepostConfirmation
                open={openRepostConfirmation}
                handleClose={handleRepostConfirmationClose}
                handleConfirm={handleRepostConfirm}
            />
            <ErrorDialog
                open={openErrorDialog}
                handleClose={() => setOpenErrorDialog(false)}
                errorMessage={errorMessage}
            />
        </>
    );
};

export default Post;

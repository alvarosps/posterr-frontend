import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import NewPostForm from './components/NewPostForm/NewPostForm';
import PostList from './components/PostList/PostList';
import SearchInput from './components/SearchInput/SearchInput';
import SortOptions from './components/SortOptions/SortOptions';
import usePosts from './contexts/usePosts';
import { PostsContext } from './contexts/PostsContext';
import theme from './theming/theme';

function App() {
    const { posts, addPost, repostPost, setSearchTerm, setSortOption } =
        usePosts();

    const postsContextValue = {
        posts,
        addPost,
        repostPost,
        setSearchTerm,
        setSortOption,
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PostsContext.Provider value={postsContextValue}>
                <Container>
                    <Box sx={theme.mixins.appHeader}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Posterr
                        </Typography>
                        <SearchInput />
                        <SortOptions />
                    </Box>
                    <NewPostForm />
                    <PostList />
                </Container>
            </PostsContext.Provider>
        </ThemeProvider>
    );
}

export default App;

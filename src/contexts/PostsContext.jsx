import React, { createContext } from 'react';
import usePosts from './usePosts';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const { posts, addPost, repostPost, setSearchTerm, setSortOption } =
        usePosts();

    const value = {
        posts,
        addPost,
        repostPost,
        setSearchTerm,
        setSortOption,
    };

    return (
        <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
    );
};

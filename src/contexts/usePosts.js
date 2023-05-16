import { useEffect, useReducer } from 'react';
import {
    getPosts,
    getPost,
    searchPosts,
    repostPost as repostPostAPI,
} from '../services/api/posts';
import { debounce } from 'lodash';

const initialState = {
    posts: [],
    searchTerm: '',
    sortOption: 'latest',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.payload };
        case 'ADD_POST':
            return { ...state, posts: [action.payload, ...state.posts] };
        case 'REPOST_POST':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                ),
            };
        case 'SORT_POSTS':
            let sortedPosts = [...state.posts];
            if (action.payload === 'latest') {
                sortedPosts.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
            } else if (action.payload === 'trending') {
                sortedPosts.sort((a, b) => b.repost_count - a.repost_count);
            }
            return { ...state, posts: sortedPosts };
        case 'SET_SEARCH_TERM':
            return { ...state, searchTerm: action.payload };
        case 'SET_SORT_OPTION':
            return { ...state, sortOption: action.payload };
        default:
            return state;
    }
};

const usePosts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchPosts(state.searchTerm);
    }, [state.searchTerm]);

    useEffect(() => {
        dispatch({ type: 'SORT_POSTS', payload: state.sortOption });
    }, [state.sortOption]);

    const fetchPosts = async (keyword) => {
        let fetchedPosts;
        if (keyword) {
            fetchedPosts = await searchPosts(keyword);
        } else {
            fetchedPosts = await getPosts();
        }
        dispatch({ type: 'SET_POSTS', payload: fetchedPosts.data });
    };

    const addPost = (newPost) => {
        const postTimestamps =
            JSON.parse(localStorage.getItem('postTimestamps')) || [];

        const date24HoursAgo = Date.now() - 24 * 60 * 60 * 1000;
        const recentPosts = postTimestamps.filter(
            (timestamp) => timestamp > date24HoursAgo
        );

        if (recentPosts.length >= 5) {
            alert('You have reached the limit of 5 posts per day.');
            return;
        }

        postTimestamps.push(Date.now());
        localStorage.setItem('postTimestamps', JSON.stringify(postTimestamps));

        dispatch({ type: 'ADD_POST', payload: newPost });
    };

    const repostPost = async (repostedPostId, onError) => {
        try {
            const mockUserId = 1;
            const { data: repostedPost } = await repostPostAPI(
                repostedPostId,
                mockUserId
            );
            dispatch({ type: 'REPOST_POST', payload: repostedPost });
            fetchPosts();
        } catch (error) {
            onError(error.response?.data?.error || 'Something went wrong');
            console.error(error);
        }
    };

    const setSearchTerm = debounce((term) => {
        console.log('test search');
        dispatch({ type: 'SET_SEARCH_TERM', payload: term });
    }, 300);

    const setSortOption = (option) => {
        dispatch({ type: 'SET_SORT_OPTION', payload: option });
    };

    return {
        posts: state.posts,
        addPost,
        repostPost,
        setSearchTerm,
        setSortOption,
    };
};

export default usePosts;

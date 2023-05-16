import api from './index';

export const getPosts = () => {
    return api.get('/posts');
};

export const createPost = (data) => {
    return api.post('/posts', data);
};

export const repostPost = (id, userId) => {
    return api.post(`/posts/${id}/repost`, { user_id: userId });
};

export const searchPosts = (keyword) => {
    return api.get('/posts/search', { params: { keyword } });
};

export const getPost = (id) => {
    return api.get(`/posts/${id}`);
};

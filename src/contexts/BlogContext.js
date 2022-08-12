import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as blogService from '../services/blogService';

export const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOGS':
            return action.payload.map(x => ({ ...x, likes: 0 }));
        case 'ADD_BLOG':
            return [...state, action.payload];
        case 'FETCH_BLOG_DETAILS':
        case 'EDIT_BLOG':
            return state.map(x => x._id === action.blogId ? action.payload : x);
        case 'ADD_LIKE':
            return state.map(x => x._id === action.blogId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_BLOG':
            return state.filter(x => x._id !== action.blogId);
        default:
            return state;
    }
};

export const BlogProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [blogs, dispatch] = useReducer(blogReducer, []);

    const selectBlog = (blogId) => {
        return blogs.find(x => x._id === blogId) || {};
    };

    const fetchBlogDetails = (blogId, blogDetails) => {
        dispatch({
            type: 'FETCH_BLOG_DETAILS',
            payload: blogDetails,
            blogId,
        })
    }

    const blogAdd = (blogData) => {
        dispatch({
            type: 'ADD_BLOG',
            payload: blogData,
        })

        navigate('/catalog');
    };

    const blogEdit = (blogId, blogData) => {
        dispatch({
            type: 'EDIT_BLOG',
            payload: blogData,
            blogId,
        });
    };

    const blogRemove = (blogId) => {
        dispatch({
            type: 'REMOVE_BLOG',
            blogId
        })
    }
    return (
        <BlogContext.Provider value={{
            blogs,
            blogAdd,
            blogEdit,
            fetchBlogDetails,
            selectBlog,
            blogRemove
        }}>
            {children}
        </BlogContext.Provider>
    );
}

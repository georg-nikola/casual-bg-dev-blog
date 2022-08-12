import { useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { BlogContext } from "../../contexts/BlogContext";

const BlogOwner = ({ children }) => {
    const { selectBlog } = useContext(BlogContext);
    const { user, isAuthenticated } = useAuthContext();
    const { blogId } = useParams();

    const currentBlog = selectBlog(blogId);

    if (isAuthenticated && user._id !== currentBlog._ownerId) {
        return <Navigate to='/catalog' replace />
    }

    return children ? children : <Outlet />;
};

export default BlogOwner;

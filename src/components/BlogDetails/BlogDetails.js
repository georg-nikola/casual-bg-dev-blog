import { Button } from 'react-bootstrap';
import { useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Moment from 'react-moment';

import { BlogContext } from '../../contexts/BlogContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as blogService from '../../services/blogService';

const BlogDetails = () => {
    const navigate = useNavigate();
    const { fetchBlogDetails, selectBlog, blogRemove } = useContext(BlogContext);
    const { user } = useAuthContext();
    const { blogId } = useParams();

    const currentBlog = selectBlog(blogId);

    const isOwner = currentBlog._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const blogDetails = await blogService.getOne(blogId);
            fetchBlogDetails(blogId, { ...blogDetails});
        })();
    }, [blogId, fetchBlogDetails])

    const blogDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this blog?');

        if (confirmation) {
            blogService.remove(blogId)
                .then(() => {
                    blogRemove(blogId);
                    navigate('/catalog');
                })
        }
    }

    return (
        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <i className="fa fa-image" />
          </div>
          <div className="vtimeline-block">
            <Moment className="vtimeline-date" format="YYYY/MM/DD">{currentBlog._createdOn}</Moment>
            <div className="vtimeline-content">
              <img src={currentBlog.img} alt=''/>
                <h3>{currentBlog.title}</h3>
              <p>
                {currentBlog.description}
              </p>
              <br />
              {isOwner &&
              <>
                <Button variant="primary" as={Link} to={`/catalog/${currentBlog._id}/edit`}>
                    Edit
                </Button>        
                <Button variant="danger" onClick={blogDeleteHandler}>
                    Delete
                </Button>  
              </>
              }
                     
            </div>
          </div>
        </div>
    );
};

export default BlogDetails;

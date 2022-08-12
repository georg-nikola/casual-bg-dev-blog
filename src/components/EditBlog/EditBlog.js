import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import * as blogService from '../../services/blogService';
import { BlogContext } from "../../contexts/BlogContext";

const EditBlog = () => {
    const [currentBlog, setCurrentBlog] = useState({});
    const { blogEdit } = useContext(BlogContext);
    const { blogId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        blogService.getOne(blogId)
            .then(blogData => {
                setCurrentBlog(blogData);
            })
    }, [blogId])

    const onSubmit = (e) => {
        e.preventDefault();

        const blogData = Object.fromEntries(new FormData(e.target));

        blogService.edit(blogId, blogData)
            .then(result => {
                blogEdit(blogId, result);
                navigate(`/catalog/${blogId}`)
            });
    };

    return (
        <section id="edit-page" className="auth">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control name='title' type="title" placeholder="Enter title" defaultValue={currentBlog.title} />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control name='description' type="description" placeholder="Enter Description" defaultValue={currentBlog.description} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>Image</Form.Label>
                <Form.Control name='img' type="img" placeholder="http://example.com" defaultValue={currentBlog.img} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Save
                </Button>
        </Form>
        </section>
    );
}

export default EditBlog;

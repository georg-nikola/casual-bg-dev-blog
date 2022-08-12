import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { BlogContext } from '../../contexts/BlogContext';
import * as blogService from '../../services/blogService';

const CreateBlog = () => {
    const { blogAdd } = useContext(BlogContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const blogData = Object.fromEntries(new FormData(e.target));
        blogService.create(blogData)
            .then(result => {
                blogAdd(result)
            });
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control name='title' type="title" placeholder="Enter title" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <Form.Control name='description' type="description" placeholder="Enter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>Image</Form.Label>
            <Form.Control name='img' type="img" placeholder="http://example.com" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Post
            </Button>
        </Form>
    );
};

export default CreateBlog;

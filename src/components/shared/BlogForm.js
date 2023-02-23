import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Dropzone } from 'react-dropzone';

const BlogForm = (props) => {
    const { blog, handleChange, handleSubmit, onChangeFile } = props

    return <>
            <Form className='m-5 playFont bg-light p-2 border border-2 rounded fs-2 text-center' onSubmit={handleSubmit} encType="multipart/form-data" name="blog">
                <h3>Create a New Blog</h3>
                <hr></hr>
                <Form.Group className="mb-3" >
                    <Form.Label column sm="2" htmlFor="title">Title</Form.Label>
                        <Form.Control className="w-50 m-auto" placeholder="Blog Title" value={blog.title} name="title" id="title" onChange={ handleChange }/>
                </Form.Group>

                 <Form.Group className="mb-3">
                    <Form.Label htmlFor="text">Text</Form.Label>
                    <ul style={{listStylePosition: 'inside', fontSize: '.6em', padding: '5px'}}>
                        <li style={{listStylePosition: 'inside', padding: '5px'}}>Use the verticle character to start a new line <b>|</b></li>
                        <li style={{listStylePosition: 'inside', padding: '5px'}}>Use back-ticks between verticle lines to create extra space and paragraphs: <b>|``|</b> </li>
                    </ul>
                    <Form.Control className="w-50 m-auto" as='textarea' rows={15} cols={10} placeholder="This is the first line | This is a new line |``|This is a new paragraph and has extra space below line one and two..." value={blog.text} name="text" id="text" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="video">Video</Form.Label>
                    <ul style={{listStylePosition: 'inside', fontSize: '.6em', padding: '5px'}}>
                        <li style={{listStylePosition: 'inside', padding: '5px'}}>Click the "Share" button located beneath the video on youtube</li>
                        <li style={{listStylePosition: 'inside', padding: '5px'}}><em>Do not copy entire link.</em> Copy the embeded id inside the link located <b>after</b> https://youtu.be/</li>
                        <li style={{listStylePosition: 'inside', padding: '5px'}}>Example: <em>g2a5XTH_zfQ</em></li>
                    </ul>
                    <Form.Control className="w-50 m-auto" placeholder="Embeded Id from YouTube" value={blog.video} name="video" id="video" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="link">Link</Form.Label>
                    <ul style={{listStylePosition: 'inside', fontSize: '.6em'}}>
                        <li style={{listStylePosition: 'inside'}}>Example: <em>https://jacobclapper.com</em></li>
                    </ul>
                    <Form.Control className="w-50 m-auto" placeholder="link from website" value={blog.link} name="link" id="link" onChange={ handleChange }/>
                </Form.Group>

                {/* <Form.Group className="mb-3">
                    <Form.Label htmlFor="blogImage">Image</Form.Label>
                    <Form.Control 
                        type='file'
                        // multiple 
                        // accept='image/*' 
                        className="w-50 m-auto" 
                        // value={blog.blogImage} 
                        name="fileName" 
                        id="blogImage" 
                        onChange={ onChangeFile }/>
                </Form.Group> */}

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </>

}

export default BlogForm
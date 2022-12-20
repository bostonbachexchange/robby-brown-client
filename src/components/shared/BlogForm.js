import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BlogForm = (props) => {
    const { blog, handleChange, handleSubmit } = props

    return <>
            <Form className='m-5 playFont bg-light p-2 border border-2 rounded fs-2 text-center' onSubmit={handleSubmit} name="blog">
                <h3>Create a New Blog</h3>
                <hr></hr>
                <Form.Group className="mb-3" >
                    <Form.Label column sm="2" htmlFor="title">Title</Form.Label>
                        <Form.Control className="w-50 m-auto" placeholder="Blog Title" value={blog.title} name="title" id="title" onChange={ handleChange }/>
                </Form.Group>

                 <Form.Group className="mb-3">
                    <Form.Label htmlFor="text">Text</Form.Label>
                    <Form.Control className="w-50 m-auto" as='textarea' rows={15} cols={10} placeholder="Blog Contents..." value={blog.text} name="text" id="text" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="video">Video</Form.Label>
                    <Form.Control className="w-50 m-auto" placeholder="Embeded Id from YouTube" value={blog.video} name="video" id="video" onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="link">Link</Form.Label>
                    <Form.Control className="w-50 m-auto" placeholder="link from website" value={blog.link} name="link" id="link" onChange={ handleChange }/>
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </>

}

export default BlogForm
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { updateBlog } from '../../api/blog'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../shared/BlogForm'
// import { createBlogSuccess, createBlogFailure } from '../shared/AutoDismissAlert/messages'

const EditBlogModal = (props) => {

    const { user, show, handleClose, msgAlert, triggerRefresh, id} = props
    const navigate = useNavigate()
    const [blog, setBlog] = useState({
        // title: '',
        // text: '',
        // date: '',
        // video:'',
        // blogImage: '',
    })

    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
     
    };
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
        // setBlog(prevBlog => {
        //     const updatedValue = e.target.value 
        //     const updatedName = e.target.name 
        //     const updatedBlog = {
        //         [updatedName]: updatedValue
        //     }
        //     return {
        //         ...prevBlog,
        //         ...updatedBlog
        //     }

        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateBlog(user, blog, fileName, id)
            .then(() => handleClose())
            // .then(res => { navigate(`/blog/${res.data.blog._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: "Blog was successfully updated",
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: "something when wrong",
                    variant: 'danger'
                }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <BlogForm 
                    blog={blog} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    onChangeFile={onChangeFile}
                    heading="Update Blog"
                    />
            </Modal.Body>
        </Modal>
                )
}

export default EditBlogModal
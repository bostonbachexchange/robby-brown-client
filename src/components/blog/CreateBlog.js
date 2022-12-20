import BlogForm from '../shared/BlogForm'
import { createBlog } from '../../api/blog'
import { useNavigate } from 'react-router-dom'
import { createBlogSuccess, createBlogFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'

const CreateBlog = (props) => {
    const { user, msgAlert, updatedBlogs, setUpdatedBlogs } = props
    const navigate = useNavigate()
    const [blog, setBlog] = useState({
        title: '',
        text: '',
        date: '',
        video:'',
    })
    console.log('this is blog in createBlog', blog)
    const handleChange = (e) => {
        setBlog(prevBlog => {
            const updatedValue = e.target.value 
            const updatedName = e.target.name 
            const updatedBlog = {
                [updatedName]: updatedValue
            }
            return {
                ...prevBlog,
                ...updatedBlog
            }

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createBlog(user, blog)
        // setUpdatedBlogs()
            .then(res => { navigate(`/blog/${res.data.blog._id}`)})
            // .then(res => console.log('this is the blog inside createBlog', blog))
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createBlogSuccess,
                    variant: 'success'
                })
            })
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createBlogFailure,
                    variant: 'danger'
                }))
    }

    return <BlogForm blog={blog} handleSubmit={handleSubmit} handleChange={handleChange} />
}

export default CreateBlog
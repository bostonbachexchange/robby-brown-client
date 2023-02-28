import BlogForm from '../shared/BlogForm'
import { createBlog } from '../../api/blog'
import { useNavigate } from 'react-router-dom'
import { createBlogSuccess, createBlogFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'

const CreateBlog = (props) => {
    const { user, msgAlert, updatedBlogs, setUpdatedBlogs } = props
    const navigate = useNavigate()
    const [ selected, setSelected ] = useState(null)
    const [blog, setBlog] = useState({
        title: '',
        text: '',
        date: '',
        video:'',
        // blogImage: '',
    })

    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        console.log('e.target.files[0]', e.target.files[0]) 
        setFileName(e.target.files[0])
        console.log('e.target.files[0].name', e.target.files[0].name)
        // setBlog((prevBlog) => ({
        //     ...prevBlog,
        //     blogImage: document.getElementById('blogImage').files[0]
        //     // blogImage: `${e.target.files[0].name}`
        // }));
    };
    // const onChangeFile = (e) => {
    //     setBlog((prevBlog) => ({
    //       ...prevBlog,
    //       blogImage: e.target.files[0]
    //     }));
    //   };
      

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
        // setSelected(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        // const data = new FormData()
        // data.append('upload', fileName)
        // console.log('data.getAll("upload")', data.getAll('upload'))
        createBlog(user, blog, fileName)
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

    return <BlogForm blog={blog} handleSubmit={handleSubmit} handleChange={handleChange} 
    onChangeFile={onChangeFile}
    />
}

export default CreateBlog
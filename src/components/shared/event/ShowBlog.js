import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getOneBlog, removeBlog } from "../../api/blog"
import { Button } from "react-bootstrap"
import messages from "../shared/AutoDismissAlert/messages"
import dateFormat from "dateformat"
import LoadingScreen from "../shared/LoadingScreen"

const ShowBlog = (props) => {
    const [blog, setBlog] = useState({})
    const [updated, setUpdated] = useState(false)
    const { id } = useParams()
    const { msgAlert , user} = props
    const navigate = useNavigate()

    useEffect(() => {
        getOneBlog(id)
            .then(res => {
                setBlog(res.data.blog)
                console.log('blog', blog)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting blog',
                    message: 'Error getting blog',
                    variant: 'danger'
                })
            })
    }, [updated])

    if (!blog) {
        return <LoadingScreen />
    }

    const removeTheBlog = () => {
        removeBlog(user, blog._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: "Remove Blog Success",
                    variant: 'success'
                })
            })
            .then(() => {navigate('/blog')})
            .catch(err => {
                msgAlert({
                    heading: 'Error removing song',
                    message: "Remove Blog Failure",
                    variant: 'danger'
                })
            })
    }
    return (
        <>
            <div  style={{position: "relative"}}>
                <div style={{position: "absolute", right: 0}}><p className="m-2">{dateFormat(blog.createdAt, "dddd, h:MM TT")}</p></div>
                <h1 className='m-auto p-2' style={{poistion: 'absolute', textAlign: 'center'}}>{blog.title} I don't think this is being used</h1>
            </div>
            <div className="text-center m-4">
                <p>{blog.text}</p>
                {
                    blog.video?
                    <>
						<div className='text-center'>
							<iframe style={{width: '50%', height: '400px'}} src={`https://www.youtube.com/embed/${blog.video}`}></iframe>
						</div>
                    </>
                :
                (null)
                }
                {
                    user?
                    <>
                        {/* <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                        Edit Song
                        </Button> */}
                        <Button >
                            <Link to='/blog' style={{color: 'white', textDecoration: 'none'}}>Back</Link>
                        </Button>
                        <Button onClick={() => removeTheBlog()} className="m-2" variant="danger">
                            Delete
                        </Button>
                    </>
                :
                (null)
                }
            </div>
        </>
    )
}

export default ShowBlog
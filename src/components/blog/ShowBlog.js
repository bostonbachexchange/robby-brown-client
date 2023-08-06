import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getOneBlog, removeBlog, updateBlog } from "../../api/blog"
import { Button } from "react-bootstrap"
// import messages from "../shared/AutoDismissAlert/messages"
import dateFormat from "dateformat"
import LoadingScreen from "../shared/LoadingScreen"
import apiUrl from "../../apiConfig"
import EditBlogModal from "./EditBlogModal"

const ShowBlog = (props) => {
    const [blog, setBlog] = useState({})
    const [updated, setUpdated] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const { id } = useParams()
    const { msgAlert , user} = props

    const navigate = useNavigate()
    useEffect(() => {
        getOneBlog(id)
            .then(res => {
                setBlog(res.data.blog)
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
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div className="text-center" style={{flex: 2, color: 'lightcoral'}}>
                    <p className="p-2">Author: Elias Dagher</p>
                </div>
                <div style={{flex: 10, color: '#a17f1a'}}>
                    <h1 className='m-auto p-3 border-bottom fs-1' style={{textAlign: 'center', width: '100%', fontFamily: 'Lobster'}}>
                        {blog.title}
                    </h1>
                </div>
                <div className="text-center" style={{flex: 2, color: '#a17f1a'}}>
                    <p className="p-2">
                        {dateFormat(blog.createdAt, "dddd, h:MM TT")}
                    </p>
                </div>
            </div>

            <div className="text-center m-4">
                {/* Blog Image */}
                {blog.blogImage?
                        <div className='text-center mt-4 mb-4 p-1' >
                            <img className='border-radius border-radius-5n' 
                                    style={{width: '45%'}}
                                    src={`${apiUrl}/${blog.blogImage}`} 
                                    />
                        </div>
                    :
                    (null)
                }
            {/* Blog Contents */}
            <p className="m-4 fs-5 p-3" style={{fontFamily: 'Nunito'}}>
                {blog.text ?(
                    <div style={{whiteSpace : 'pre-line'}}> {
                        blog.text.split("|").map((line, index) => (
                            <div 
                                className={`text-center ${index === 0 ? "first-line" : ""}`} 
                                // if contents is `` then hide the line
                                style={line === "``" ? {color: "white"} : {}}>
                                    {/* Style first letter */}
                                    {index === 0 ? 
                                        <b><span style={{color: '#A78B41', fontSize: '2em', verticalAlign: 'middle'}}>
                                            {line.substring(0, 1)}
                                        </span></b> 
                                    : ""}
                                {line.substring(1)}
                            </div>)
                    )}</div>) : (null)}
            </p>
            {blog.video?
                    <div className='text-center'>
                        <iframe className='blogVideo' 
                                src={`https://www.youtube.com/embed/${blog.video}`} 
                                allowfullscreen></iframe>
                    </div>
                :
                (null)
            }
            {blog.link?
                    <div className='text-center mt-4 mb-4 p-1' >
                        <a className='' 
                                href={`${blog.link}`} 
                                >{`${blog.link}`}</a>
                    </div>
                :
                (null)
            }
                {user?
                    <>
                        <Button >
                            <Link to='/blog' style={{color: 'white', textDecoration: 'none'}}>Back</Link>
                        </Button>
                        <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                        Edit Blog
                        </Button>
                        <Button onClick={() => removeTheBlog()} className="m-2" variant="danger">
                            Delete
                        </Button>
                    </>
                :
                (null)}
            </div>
            <EditBlogModal 
                user={user}
                blog={blog}
                id={id}
                show={editModalShow}
                updateBlog={updateBlog}
                msgAlert={msgAlert}
                heading="Edit Blog"
                triggerRefresh={() => setUpdated(!updated)}
                handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default ShowBlog
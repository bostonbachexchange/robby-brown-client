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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div className="text-center" style={{flex: 2, color: 'lightcoral'}}>
                <p className="p-2">Author: Elias Dagher</p>
            </div>
            <div style={{flex: 10, color: '#a17f1a'}}>
                <h1 className='m-auto p-3 border-bottom fs-1' style={{textAlign: 'center', width: '100%', fontFamily: 'Lobster'}}>{blog.title}</h1>
            </div>
            <div className="text-center" style={{flex: 2, color: '#a17f1a'}}>
                <p className="p-2">{dateFormat(blog.createdAt, "dddd, h:MM TT")}</p>
            </div>
        </div>

        <div className="text-center m-4">
        <p className="m-4 fs-5 p-3" style={{fontFamily: 'Nunito'}}>
            {blog.text ?(
                <div> {
                    blog.text.split("|").map((line, index) => (
                        <div className={`text-center ${index === 0 ? "first-line" : ""}`} 
                        style={line === "``" ? {color: "white"} : {}}>
                        {index === 0 ? <b><span style={{color: '#A78B41', fontSize: '2em', verticalAlign: 'middle'}}>{line.substring(0, 1)}</span></b> : ""}
                        {line.substring(1)}
                        </div>)
                    ) 
                }
                </div>) : (null)}
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
                {user?
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
                (null)}
            </div>
        </>
    )
}

export default ShowBlog
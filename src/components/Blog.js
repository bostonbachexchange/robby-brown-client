import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import messages from './shared/AutoDismissAlert/messages'
import LoadingScreen from './shared/LoadingScreen'
import { getAllBlogs } from '../api/blog'
import dateFormat, { masks } from "dateformat";
const Blog = (props) => {
	// const { msgAlert, user } = props
	const { updatedBlogs } = props
	console.log('props in Blog', props)
	const [blogs, setBlogs] = useState(null)
	const [error, setError] = useState(false)
	const { msgAlert } = props

	useEffect(() => {
		getAllBlogs()
			.then(res => setBlogs(res.data.blogs))
			.catch(err => {
				msgAlert({
					heading: 'Error Getting Blog',
					message: messages.getSongsFailure,
					variant: 'danger',
				})
				setError(true)
			})
	}, [updatedBlogs])
	
	if (error) {
		return <p>Error!</p>
	}
	if (!blogs) {
		return <LoadingScreen />
	} else if (blogs.length === 0) {
		return <p className='text-center'>No blogs yet. Check again soon.</p>
	}


	const blogItems = blogs.map(blog => 
		<>
			<div className="m-auto mt-4 mb-5 fs-5" style={{width: '80%', border: '3px solid wheat', boxShadow: '3px 3px 3px grey', position: 'relative', borderRadius: '11px'}} key={blog._id}>
				{/* <div  className='p-2' style={{backgroundColor: 'red', color: 'white', position: 'relative'}}>
					<h4 className='p-2' style={{position: 'absolute', textAlign: 'center'}}><em>{blog.title}</em></h4>
					<p className="font-weight-bold p-2" style={{position: 'absolute', right: 0}}>{dateFormat(blog.date, "mmmm dS, yyyy")}</p>
				</div> */}
				<div style={{position: "relative", backgroundColor: '#212121', color: 'wheat', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}>
					<div style={{position: "absolute", right: 0}}><p className="m-2">{dateFormat(blog.date, "mmmm dS, yyyy")}</p>
					</div>
               		<h1 className='m-auto p-2' style={{poistion: 'absolute', textAlign: 'center', color: 'wheat', fontFamily: 'Roboto'}}>{blog.title}</h1>
           		</div>
				{/* <p className="text-start">{blog.text} ... </p> */}
				<p className='text-center p-5 mb-0 mt-0 fs-4' style={{fontFamily: 'Rajdhani', fontSize: '20px', backgroundColor: 'whitesmoke', borderRadius: '11px', color: '#212121'}}>{blog.text.slice(0, 40) } ... </p>
				{/* {(blog.text.length > 200) ?(<Link to={`/blog/${blog._id}`}>Continue Reading</Link>) : (null)} */}
				<div className='text-center' style={{position: 'absolute', width: '100%', bottom: '-15%', backgroundColor: 'transparent'}}>
						<button className="p-3 text-center rounded-pill" style={{ border: '3px solid #212121', backgroundColor: 'wheat'}} >
							<Link to={`/blog/${blog._id}`} style={{color: 'black', textDecorationLine: 'none', fontSize: '20px', fontWeight: 'bold'}}><span className='conRdg'>Continue Reading</span></Link>
						</button>
				</div>
			</div>
		</>
		)

	return (
		<>
			<div style={{backgroundColor: '#EDEFEE'}} className="mb-0 pb-5 border-top">
				<div className='p-3'>
					<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '2px 2px 2px #41403C', backgroundColor: 'white'}}>Blog</h2>
				</div>
				<div>
					{blogItems}
				</div>
			</div>
		</>
	)
}

export default Blog

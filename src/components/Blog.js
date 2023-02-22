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
		return <p className='text-center m-4'>No blogs yet. Check again soon.</p>
	}


	const blogItems = blogs.map(blog => 
		<>
			<div className="m-auto mt-4 mb-5 fs-5 blogMapContainer" 
				key={blog._id}>
				<div 
				style={{ 
					backgroundColor: '#d4cebe', 
					color: '#AD974F', 
					borderTopRightRadius: '10px', 
					borderTopLeftRadius: '10px',
					marginTop: '0px'}}>
					<div className='blogIndexTitle'>
						<h2 className='text-center mb-0' style={{color: 'black'}}>{blog.title}</h2>
					</div>
					<div className='blogDateFormat'>
						<p>{dateFormat(blog.date, "mmmm dS, yyyy")}</p>
					</div> 
					<div className='blogDateFormatShort'>
						<p><small>{dateFormat(blog.date, "m-d-yy")}</small></p>
					</div> 
           		</div>
				<p className='text-center pt-2 pb-5 mb-0 mt-0 fs-5' style={{fontFamily: 'Rajdhani', fontSize: '20px', backgroundColor: 'whitesmoke', borderRadius: '11px', color: '#212121'}}>{blog.text.slice(0, 150) } ... </p>
				<div className='text-center blogReadMore'>
					<Button className="p-3 text-center rounded-pill conRdgBorder" style={{ border: '3px solid #212121', backgroundColor: '#AD974F'}} >
						<Link to={`/blog/${blog._id}`} style={{color: 'black', textDecorationLine: 'none', fontWeight: 'bold'}}><span className='cndRdg'>Continue Reading</span></Link>
					</Button>
				</div>
			</div>
		</>
		)

	return (
		<>
			<div style={{backgroundColor: '#EEE'}} className="mb-0 pb-5">
				<div className='p-3'>
					<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', borderRadius: '4px', backgroundColor: '#FFF'}}>Blog</h2>
				</div>
				<div>
					{blogItems}
				</div>
			</div>
		</>
	)
}

export default Blog

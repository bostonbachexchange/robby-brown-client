import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import messages from './shared/AutoDismissAlert/messages'
import LoadingScreen from './shared/LoadingScreen'
import { getAllEvents } from '../api/event'
import dateFormat, { masks } from "dateformat";

const Calendar = (props) => {
	// const { msgAlert, user } = props
	console.log('props in Calendar', props)
	const { updatedEvents } = props
	console.log('props in Event', props)
	const [events, setEvents] = useState(null)
	const [error, setError] = useState(false)
	const { msgAlert } = props
	useEffect(() => {
		getAllEvents()
			.then(res => setEvents(res.data.events))
			.catch(err => {
				msgAlert({
					heading: 'Error Getting Event',
					message: "Failure getting Events",
					variant: 'danger',
				})
				setError(true)
			})
	}, [updatedEvents])
	
	if (error) {
		return <p>Error!</p>
	}
	if (!events) {
		return <LoadingScreen />
	} else if (events.length === 0) {
		return <p className='text-center'>No Events yet. Better add some.</p>
	}

	const eventItems = events.map(event => 
		<>
			<Container className='mt-3 p-0 rounded' style={{width: '100%', boxShadow: '3px 3px 3px grey', border: '3px solid wheat'}}>
				<Row className='m-auto p-3 rounded-top' style={{border: '2px solid black', backgroundColor: '#212121', color: 'wheat'}}>
					<Col md={3} className="text-start" style={{fontSize: '1.5em'}}>{dateFormat(event.createdAt, "mm-d-yy")}</Col>
					<Col md={6} className="text-center" style={{fontSize: '1.4em', fontWeight: 'bold'}}>{event.location}</Col>
					<Col sm={3} className="text-end">{event.time}</Col>
				</Row>
				<Row className='m-auto  p-2 text-center rounded-bottom' style={{borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black'}}>
					<Col></Col>
					<Col md={6} className="m-4 fs-4" style={{color: 'black', size: '0.7'}}>{event.details}</Col>
					<Col></Col>
				</Row>
			</Container>
			{/* <div className="m-4" style={{width: '80%'}} key={event._id}> */}
			{/* <p className="text-start m-2">{dateFormat(event.createdAt, "mmmm dS, yyyy")}</p> */}
			{/* <h4 className="text-start"><em>{event.location}</em></h4> */}
			{/* <p className="text-start">{blog.text} ... </p> */}
			{/* <p className="text-start">{event.details.slice(0, 50) } ... </p> */}
			{/* <p>Date {blog.date}</p> */}
			{/* {(blog.text.length > 200) ?(<Link to={`/blog/${blog._id}`}>Continue Reading</Link>) : (null)} */}
			{/* <p className="text-start m-2">{dateFormat(blog.createdAt, "dddd, h:MM TT")}</p> */}
		{/* </div> */}
		</>
		)
	return (
		<>
			<div className='mt-0 pb-4' style={{backgroundColor: '#EDEFEE'}}>
			<div className='pt-3 pb-1'>
				<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Calandar</h2>
			</div>
			<h2 className="m-2 text-center pb-4">2022</h2>
			{/* <div className="m-auto mt-5" style={{display: 'flex', width: '80%'}}>
				<div style={{flex: '4'}}>
					<h3 className='text-left'> Date</h3>
				</div>
				<div style={{flex: '4'}}>
					<h3 className='text-center'> Location</h3>
				</div>
				<div style={{flex: '4', marginRight: '0px'}}>
					<h3 className='text-end'> Time</h3>
				</div>
			</div> */}
			{/* <h2 className="text-center m-2">2022</h2>
			<hr className="m-auto" style={{width: '200px'}}></hr>
			<Container className='mt-3' style={{width: '100%'}}>
				<Row className='m-auto' style={{border: '2px solid black'}}>
					<Col md={3} className="text-start" style={{fontSize: '1.5em'}}>10.18.22</Col>
					<Col md={6} className="" style={{fontSize: '1.2em'}}>Disney Springs Orlando, Florida</Col>
					<Col sm={3} className="text-end">7:00PM - 12:00AM</Col>
				</Row>
				<Row className='m-auto' style={{borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black'}}>
					<Col></Col>
					<Col md={6} style={{color: 'grey', size: '0.7'}}>Chorus of stray cats sing be4 feasting of the carcusses of mice</Col>
					<Col></Col>
				</Row>
			</Container> */}
			{/* <hr className='m-auto mt-3' style={{width: '80%', color: 'green'}}></hr> */}
			{eventItems}
			</div>
		</>
	)
}

export default Calendar

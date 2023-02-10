import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
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
		return <p className='text-center m-4'>No Events yet. Check back soon.</p>
	}

	const currentDate = new Date();
	
	const upcomingEvents = events.filter(event => Date.parse(event.date) > currentDate.getTime());

	const pastEvents = events.filter(event => Date.parse(event.date) < currentDate.getTime());

	const upcomingEventItems = upcomingEvents.map(event => 
		<>
			<Container 
				className='mt-3 p-0 rounded' 
				style={{
					width: '100%', 
					boxShadow: '3px 3px 3px grey', 
					border: '3px solid wheat'}}>
				<Row 
					className='m-auto p-3 rounded-top' 
					style={{border: '2px solid black', 
					backgroundColor: '#212121', 
					color: 'wheat'}}>
					<Col 
						md={3} 
						className="text-start" 
						style={{fontSize: '1.5em'}}>
							{dateFormat(event.date, "mm-d-yy")}
					</Col>
					<Col 
						md={6} 
						className="text-center" 
						style={{fontSize: '1.4em', 
						fontWeight: 'bold'}}>
							{event.title}
					</Col>
					<Col 
						sm={3} 
						className="text-end">
							{event.time}
					</Col>
				</Row>
				<Row className='m-auto  p-2 text-center rounded-bottom' style={{borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black'}}>
					<p>{event.details}</p>
					<a href={event.learnmore}>
						<Button >Learn More</Button>
					</a>
				</Row>
			</Container>
		</>
		)

	const eventItems = pastEvents.map(event => 
		<>
			<Container 
				className='mt-3 p-0 rounded' 
				style={{
					width: '100%', 
					boxShadow: '3px 3px 3px grey', 
					border: '3px solid wheat'}}>
				<Row 
					className='m-auto p-3 rounded-top' 
					style={{border: '2px solid black', 
					backgroundColor: '#212121', 
					color: 'wheat'}}>
					<Col 
						md={3} 
						className="text-start" 
						style={{fontSize: '1.5em'}}>
							{dateFormat(event.date, "mm-d-yy")}
					</Col>
					<Col 
						md={6} 
						className="text-center" 
						style={{fontSize: '1.4em', 
						fontWeight: 'bold'}}>
							{event.title}
					</Col>
					<Col 
						sm={3} 
						className="text-end">
							{event.time}
					</Col>
				</Row>
				<Row className='m-auto  p-2 text-center rounded-bottom' style={{borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black'}}>
					<p>{event.details}</p>
					<a href={event.learnmore}>
						<Button >Learn More</Button>
					</a>
				</Row>
			</Container>
		</>
		)

	return (
		<>
			<div className='mt-0 pb-4' style={{backgroundColor: 'white'}}>
				<div className='pt-3 pb-1'>
					<h2 
						className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Calandar</h2>
				</div>
				<h2 className="m-2 text-center pt-4 pb-4">2023</h2>
			<h3 className='m-2 mt-4'>Upcoming Events</h3>
			{upcomingEventItems}
			<h3 className='m-2 mt-4'>Past Events</h3>
			{eventItems}
			</div>
		</>
	)
}

export default Calendar

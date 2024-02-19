import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
// import messages from './shared/AutoDismissAlert/messages'
import LoadingScreen from './shared/LoadingScreen'
import { getAllEvents, removeEvent, updateEvent } from '../api/event'
import dateFormat, { masks } from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import EditEventModal from './shared/event/EditEventModal';
import apiUrl from '../apiConfig'
// import eventPicDefualt from '../../src/assets/images/elias-pic.jpeg'

const Calendar = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in Calendar', props)
	const { user, msgAlert,  } = props
	// console.log('props in Event', props)
	const [events, setEvents] = useState(null)
	const [error, setError] = useState(false)
	const [editModalShow, setEditModalShow] = useState(false)
	const [updatedEvents, setUpdatedEvents] = useState(true)
	const [selectedEventId, setSelectedEventId] = useState(null);

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

	const removeTheEvent = (event) => {
		// console.log("user", user._id)
        removeEvent(user, event._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: "Remove Event Success",
                    variant: 'success'
                })
            })
            .then(() => {setUpdatedEvents(!updatedEvents)})
			.then(() => {})
            .catch(err => {
                msgAlert({
                    heading: 'Error removing event',
                    message: "Remove Event Failure",
                    variant: 'danger'
                })
            })
    }
	const currentDate = new Date();
	
	const upcomingEvents = events.filter(event => Date.parse(event.date) > currentDate.getTime());

	const pastEvents = events.filter(event => Date.parse(event.date) < currentDate.getTime());

	const sortedEvents = upcomingEvents.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateA - dateB;
	  });
	  
	  
	const upcomingEventItems = sortedEvents.map(event => 
		
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
							{dateFormat(event.date.replace(/-/g, '\/').replace(/T.+/, ''), "mm-d-yy")}
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
				<Row className='m-auto  p-2 text-center rounded-bottom' style={{borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black', backgroundColor: 'whitesmoke', fontFamily: 'Roboto', fontSize: '18px'}}>
					<p className='p-1'>{event.details}</p>
					<p>{event.location}</p>
					{event.learnmore? <a href={event.learnmore} target='_blank'>
						<button className='seeDetailsButton'>See Details</button>
					</a> : null}
				</Row>
				{/* <Row>
					<Col md={9}>;lija;dsf</Col>
					<Col md={3}>
						<Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                       		Edit
                        </Button>
                        <Button onClick={() => removeTheEvent()} className="m-2" variant="danger">
                            Delete
                        </Button>
					</Col>
				</Row> */}
				
			</Container>
		</>
		)

	const eventItems = pastEvents.map(event => {

		const eventPictureSrc =
        	event.image === 'default'? null
        		: `${apiUrl}/${event.image}`;
	
		return (
		<>
			<Container 
				className='mt-3 p-0 rounded' 
				style={{
					width: '100%', 
					boxShadow: '3px 3px 3px grey', 
					backgroundColor: '#FFF',
					border: '3px solid transparent'}}>
				<Row >
					<Col md={3}>
						{event.image? 
							<img className='eventPhoto d-block img-fluid' fluid src={eventPictureSrc}/>
							: null
						}
					
					</Col>
					<Col md={6} style={{fontFamily: 'Zichtbaar, Arial, sans-serif'}}>
						<Row className='p-4 m-2'>
							<h3>{event.title}</h3>
						</Row>
						<Row className='p-4 m-2'> 
							<p>{event.details}</p>
						</Row>
					</Col>
					<Col 	
						md={3}
						style={{borderLeft: '2px solid grey'}}>
							<Row className='text-center mt-4 mb-4'>
								{event.learnmore? <a href={event.learnmore} target='_blank'>
							<button class='seeDetailsButton' style={{border: '1px solid transparent', borderRadius: '3px', fontFamily: 'Arial', width: '90%', padding: "14px"}} className='seeDetailsButton '><b>See Details</b></button>
						</a> : null}
							</Row>
							<Row style={{width: "90%", marginBottom: '28px'}}>
								<Card.Text className='p-4' style={{color: "grey", fontSize: '14px'}}>
									<FontAwesomeIcon icon={faClockFour} className='mr-2' size="md" color="grey" />
									<span className='m-2 wd-100'>
										{dateFormat(event.date.replace(/-/g, '/').replace(/T.+/, ''), "ddd mmm dd, yyyy ")}
										- {event.time}
									</span>
								</Card.Text>
								<hr style={{width: '100%', color: 'black', fontSize: '5px', margin: '0% 0% 0% 7.5%', padding: '0px'}}></hr>
								<Card.Text className='p-4' style={{color: "grey", fontSize: '14px'}}>
								<FontAwesomeIcon icon={faLocationPin} className='mr-2' size="md" color="grey" />
									<span className='m-2 wd-100'></span>
								{event.location}
								</Card.Text>
							</Row>
					</Col>
				</Row>
				</Container>
				{ user ?
					<Row className='mb-5'>
						<Col md={9}></Col>
						<Col md={3} className='mt-4'>
							<div className='ml-0 d-inline-block' style={{width: '49%', alignItems: 'left', fontFamily: 'Arial'}}>
								<Button 
									onClick={() => {
										setSelectedEventId(event._id);
										setEditModalShow(true);
										}} 
									className="ml-0" variant="warning" style={{paddingLeft: '20px', paddingRight: '20px', alignItems: 'left'}}>
										Edit
								</Button>
							</div>
							<div className='d-inline-block' style={{width: '49%', alignItems: 'right', fontFamily: 'Arial', marginRight: '-10px'}}>
								<Button onClick={() => removeTheEvent(event)} className="mr-0 " variant="danger">
									Delete
								</Button>
							</div>
						</Col>
					</Row > 
					: null }
				{/* <Row 
					className='m-auto p-3 rounded-top' 
					style={{border: '2px solid black', 
					backgroundColor: '#212121', 
					color: 'wheat'}}> */}
					{/* <Col 
						md={3} 
						className="text-start" 
						style={{fontSize: '1.5em'}}>
							{dateFormat(event.date.replace(/-/g, '/').replace(/T.+/, ''), "ddd mmm dd, yyyy")}
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
				</Row> */}
				{/* <Row className='m-auto  p-2 text-center rounded-bottom' style={{borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black', backgroundColor: 'whitesmoke', fontFamily: 'Roboto', fontSize: '18px'}}>
					<p className='p-1'>{event.details}</p>
					<p>{event.location}</p>
					<a href={event.learnmore}>
						<Button >Learn More</Button>
					</a>
				</Row> */}
			
		</>
	)
})
	
	return (
		<>
			<div className='mt-0 pb-4' style={{backgroundColor: '#EEE'}}>
				<div className='p-4' >
					<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', borderRadius: '4px', backgroundColor: '#FFF'}}>Calendar</h2>
				</div>
			<div>
				<h2 className="m-2 text-center pt-4 pb-4 calendarYear">2024 Season Events</h2>
				<hr className='w-50 m-auto'></hr>
			</div>
			<h3 className='upcomingEvents p-3'>Upcoming Events</h3>
			{(upcomingEventItems.length > 0 ) ? upcomingEventItems : <p className='m-4 text-center'>There are currently no upcoming events. Check back soon!</p>}
			<hr></hr>
			<h3 className='mt-4 upcomingEvents p-3'>Past Events</h3>
			{eventItems}
			</div>
			<EditEventModal 
                user={user}
                selectedEventId={selectedEventId}
                show={editModalShow}
                updateEvent={updateEvent}
                msgAlert={msgAlert}
                heading="Edit Event"
                triggerRefresh={() => setUpdatedEvents(!updatedEvents)}
                handleClose={() => setEditModalShow(false)}
            />
		</>
)
}

export default Calendar

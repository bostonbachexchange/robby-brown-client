import Button from 'react-bootstrap/Button';
// import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const EventForm = (props) => {
    const { event, handleChange, handleSubmit, heading, fileName, onChangeFile } = props
    return <>
            <Form className='playFont bg-light fs-2 p-2 text-center border border-3 rounded' onSubmit={handleSubmit} name="event">
                <h3><b>{heading}</b></h3>
                <hr></hr>
                <Form.Group className="mb-3" >
                    <Form.Label column sm="2" htmlFor="title">Title</Form.Label>
                        <Form.Control className="m-auto" placeholder="Event Name" value={event.title} name="title" id="title" onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label column sm="2" htmlFor="location">Location</Form.Label>
                        <Form.Control className="m-auto" placeholder="Location" value={event.location} name="location" id="details" onChange={ handleChange }/>
                </Form.Group>

                 <Form.Group className="mb-3">
                    <Form.Label htmlFor="text">Event Info</Form.Label>
                    <Form.Control className="m-auto" as='textarea' rows={10} cols={10} placeholder="Tickets Price, Repertoire, Collaborators, Directions... " value={event.details} name="details" id="details" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="date">Date</Form.Label>
                    <Form.Control className="m-auto rounded-lg" type="date" value={event.date} name="date" id="date" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="time">Time</Form.Label>
                    <Form.Control className="m-auto" placeholder="time of event" value={event.time} name="time" id="time" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="learnmore">Learn More</Form.Label>
                    <Form.Control className="m-auto" placeholder="link to further event information 'https://example.com'" value={event.learnmore} name="learnmore" id="learnmore" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fileName">Image</Form.Label>
                    <Form.Control 
                        type='file'
                        // multiple 
                        // accept='image/*'
                        encType="form-data" 
                        className="m-auto" 
                        value={fileName} 
                        name="fileName" 
                        id="fileName" 
                        onChange={ onChangeFile }/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </>

}

export default EventForm
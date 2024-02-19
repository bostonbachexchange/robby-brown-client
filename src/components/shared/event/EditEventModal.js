import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { updateEvent } from '../../../api/event'
// import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import EventForm from '../../shared/EventForm'
// import { createBlogSuccess, createBlogFailure } from '../shared/AutoDismissAlert/messages'

const EditEventModal = (props) => {
    
    const { user, show, handleClose, msgAlert, triggerRefresh, selectedEventId} = props

    
    const [event, setEvent] = useState({})
    const [fileName, setFileName] = useState({})
    
    useEffect(() => {
        if (selectedEventId) {
            setEvent(prevEvent => ({ ...prevEvent, id: selectedEventId }));
        }
    }, [selectedEventId]);

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
     
    };
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEvent(user, event, fileName)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: "Blog was successfully updated",
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: "something when wrong",
                    variant: 'danger'
                }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <EventForm
                    event={event} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    onChangeFile={onChangeFile}
                    heading="Update Event"
                    />
            </Modal.Body>
        </Modal>
                )
}

export default EditEventModal
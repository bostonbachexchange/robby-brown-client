// import EventForm from '../shared/EventForm'
import { createEvent } from '../../../api/event'
import { useNavigate } from 'react-router-dom'
import { createEventSuccess, createEventFailure } from '../AutoDismissAlert/messages'
// import { createEventSuccess, createEventFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'
import EventForm from '../EventForm'

const CreateEvent = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    const [event, setEvent] = useState({
        title: '',
        details: '',
        learnmore: '',
        location: '',
        date: '',
        time:'',
    })
    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
     
    };

    const handleChange = (e) => {
        setEvent(prevEvent => {
            const updatedValue = e.target.value 
            const updatedName = e.target.name 
            const updatedEvent = {
                [updatedName]: updatedValue
            }
            return {
                ...prevEvent,
                ...updatedEvent
            }

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createEvent(user, event, fileName)
            .then(res => { navigate(`/calendar`)})
            // .then(res => console.log('this is the event inside createEvent', event))
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createEventSuccess,
                    variant: 'success'
                })
            })
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createEventFailure,
                    variant: 'danger'
                }))
    }

    return <EventForm 
                event={event} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                onChangeFile={onChangeFile} 
                heading="Create a New Calendar Event"
                />
}

export default CreateEvent
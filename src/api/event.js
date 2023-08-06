import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllEvents = () => {
    return axios(`${apiUrl}/events`)
}

export const getOneBlog = (id) => {
    return axios(`${apiUrl}/event/${id}`)
}

export const createEvent = (user, event) => {
    // console.log('this is user', user)
    // console.log('this is event', event)
	return axios({
		method: 'POST',
        // checkurl
		url: apiUrl + '/events',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { event: event},
	})
}

export const updateEvent = (user, updatedEvent) => {
    // console.log('this is user', user)
    // console.log('this is updatedEvent', updatedEvent)
	return axios({
		url: `${apiUrl}/event/${updatedEvent._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { event: updatedEvent},
	})
}

export const removeEvent = (user, eventId) => {
    // console.log('here is the eventId in delete', eventId)
    // console.log('here is the user in delete', user)
    return axios({
        // blogId
        url: `${apiUrl}/event/${eventId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}


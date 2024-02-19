import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllEvents = () => {
    return axios(`${apiUrl}/events`)
}

export const getOneBlog = (id) => {
    return axios(`${apiUrl}/event/${id}`)
}

export const createEvent = (user, event, fileName) => {
    const formData = new FormData();
    formData.append('event', JSON.stringify(event));
    formData.append('file', fileName);
	return axios({
		method: 'POST',
        // checkurl
		url: apiUrl + '/events',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
	})
}

export const updateEvent = (user, event, fileName) => {
    const formData = new FormData()
    formData.append('event', JSON.stringify(event));
    formData.append('file', fileName)
	return axios({
		url: `${apiUrl}/event/${event.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
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


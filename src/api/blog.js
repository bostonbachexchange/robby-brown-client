import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllBlogs = () => {
    return axios(`${apiUrl}/blog`)
}

export const getOneBlog = (id) => {
    return axios(`${apiUrl}/blog/${id}`)
}

export const createBlog = (user, blog) => {
    console.log('this is user', user)
    console.log('this is blog', blog)
	return axios({
		method: 'POST',
        // checkurl
		url: apiUrl + '/blogs',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { blog: blog},
	})
}

export const updateBlog = (user, updatedBlog) => {
    // console.log('this is user', user)
    console.log('this is updatedBlog', updatedBlog)
	return axios({
		url: `${apiUrl}/blog/${updatedBlog._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { blog: updatedBlog},
	})
}

export const removeBlog = (user, blogId) => {
    console.log('here is the blogId in delete', blogId)
    console.log('here is the user in delete', user)
    return axios({
        // blogId
        url: `${apiUrl}/blog/${blogId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}


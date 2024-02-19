import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllBlogs = () => {
    return axios(`${apiUrl}/blog`)
}

export const getOneBlog = (id) => {
    return axios(`${apiUrl}/blog/${id}`)
}

export const createBlog = (user, blog, fileName) => {
    const formData = new FormData();
    formData.append('blog', JSON.stringify(blog));
    formData.append('file', fileName);

	return axios({
		method: 'POST',
		url: apiUrl + '/blogs',
		headers: {
			Authorization: `Token token=${user.token}`,
            'Content-Type': 'multipart/form-data;boundary="boundary"',
		},
		data:  formData ,
	})
}

export const updateBlog = (user, blog, fileName, id) => {
    const formData = new FormData()
    formData.append('blog', JSON.stringify(blog));
    formData.append('file', fileName)
	return axios({
		url: `${apiUrl}/blogs/${id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: formData,
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


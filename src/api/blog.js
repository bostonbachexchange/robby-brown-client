import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllBlogs = () => {
    return axios(`${apiUrl}/blog`)
}

export const getOneBlog = (id) => {
    return axios(`${apiUrl}/blog/${id}`)
}

export const createBlog = (user, blog, fileName) => {
    console.log('this is user', user)
    console.log('this is blog', blog)
    console.log('this is fileName', fileName)
    const formData = new FormData();
    // formData.append(blog);
    formData.append('blog', JSON.stringify(blog));
    formData.append('file', fileName);

	return axios({
		method: 'POST',
        // checkurl
		url: apiUrl + '/blogs',
		headers: {
			Authorization: `Token token=${user.token}`,
            'Content-Type': 'multipart/form-data;boundary="boundary"',
		},
		data:  formData ,
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


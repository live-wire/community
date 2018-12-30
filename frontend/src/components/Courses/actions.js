import axios from 'axios';

export const getCourses = token => {
	return axios.get('http://localhost:8000/course/', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`
		}
	});
}

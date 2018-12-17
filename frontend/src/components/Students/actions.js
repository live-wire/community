import axios from 'axios';

export const getStudents = token => {
	return axios.get('http://localhost:8000/student/', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`
		}
	});
}

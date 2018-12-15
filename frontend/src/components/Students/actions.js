import axios from 'axios';

export const getStudents = token => {
	return axios.get('http://35.204.29.216:8000/student/', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`
		}
	});
}

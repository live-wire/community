import axios from 'axios';

export const getTeachers = token => {
	return axios.get('http://localhost:8000/teacher/', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Token ${token}`
		}
	});
}

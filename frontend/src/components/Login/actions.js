import axios from 'axios';

export const login = (username, password) => {
	return axios.post('http://35.204.29.216:8000/auth/login', {
		username,
		password
	}, {headers: {
		'Content-Type': 'application/json'
	}});
}

import axios from 'axios';

export const login = (username, password) => {
	return axios.post('http://35.204.97.223:8000/auth/login', {
		username,
		password
	}, {headers: {
		'Content-Type': 'application/json'
	}});
}

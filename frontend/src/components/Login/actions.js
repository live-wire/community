import API from '../../framework/api';

export const login = (username, password) => {
	return API.post('auth/login', {
		username,
		password
	});
}

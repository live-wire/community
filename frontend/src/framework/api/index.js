import axios from 'axios';
import { getKey } from '../../utils/localStorage';

const instance = axios.create({
	baseURL: 'http://localhost:8000/'
});

instance.interceptors.request.use(
	config => {
		const token = getKey('token');
		if (token) {
			config.headers.common.Authorization = `Token ${token}`;
		}
		return config;
	},
	err => Promise.reject(err)
);

export default instance;

import axios from 'axios';

const instance =  axios.create({
	baseURL: 'http://localhost:8000/',
});

const setAuthHeader = token => instance.defaults.headers.common['Authorization'] = `Token ${token}`;

const communityToken = localStorage.getItem('communityToken');

if(communityToken) {
	setAuthHeader(communityToken);
}

export {setAuthHeader};
export default instance;

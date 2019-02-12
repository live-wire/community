import API from '../../framework/api';

export const getCourses = token => {
	return API.get('course/');
};

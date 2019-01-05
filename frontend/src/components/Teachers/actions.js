import API from '../../framework/api';

export const getTeachers = token => {
	return API.get('teacher/');
}

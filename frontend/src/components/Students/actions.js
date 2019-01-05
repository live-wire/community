import API from '../../framework/api';

export const getStudents = token => {
	return API.get('student/');
}

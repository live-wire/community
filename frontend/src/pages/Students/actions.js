import API from '../../framework/api';

const fetchStudentsAPI = 'student/';

const createURL = (base, paramsObj) => {
	if (!paramsObj) {
		return base;
	}
	return [
		base,
		Object.keys(paramsObj)
			.map(key => `${key}=${paramsObj[key]}`)
			.join('&')
	].join('?');
};

export const getStudents = paramsObj => {
	return API.get(createURL(fetchStudentsAPI, paramsObj));
};

import API from '../../framework/api';

const fetchTeachersAPI = 'teacher/';

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

export const getTeachers = paramsObj => {
	return API.get(createURL(fetchTeachersAPI, paramsObj));
};

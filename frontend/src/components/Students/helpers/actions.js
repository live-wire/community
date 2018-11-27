import { students } from './data';

export const getStudents = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve({ data: students }), 2000);
	});
};

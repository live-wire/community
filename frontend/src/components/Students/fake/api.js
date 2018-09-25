import { students } from './data';

const GET_STUDENTS_RESPONSE_TIME = 2000;

const random = () => {
	const values = [false, true];
	const index = Math.round(Math.random());
	return values[index];
};

const wait = time =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (random()) {
				resolve({ data: students });
			} else {
				reject({ message: 'Some error occured' });
			}
		}, time);
	});

export const getStudents = () => {
	return wait(GET_STUDENTS_RESPONSE_TIME);
};

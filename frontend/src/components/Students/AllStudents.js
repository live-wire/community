import React from 'react';
import Student from './Student';

const AllStudents = props => {
	const { list } = props;

	return (
		<div>
			{list.length === 0 ? (
				<div>No Students Found!</div>
			) : (
				list.map(student => <Student name={student.name} key={student.id} />)
			)}
		</div>
	);
};

export default AllStudents;

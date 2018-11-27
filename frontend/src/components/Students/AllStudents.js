import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

class StudentsDataTable extends React.Component {
	render() {
		const { students } = this.props;
		return (
			<div className="StudentsDataTable">
				{students.length === 0 ? (
					<div>No Students Found!</div>
				) : (
					students.map(student => (
						<Student name={student.name} key={student.id} />
					))
				)}
			</div>
		);
	}
}

StudentsDataTable.propTypes = {
	students: PropTypes.array.isRequired
};

const AllStudents = props => {
	const { students } = props;

	return (
		<div className="AllStudents">
			<h1>Students</h1>
			<StudentsDataTable students={students} />
		</div>
	);
};

AllStudents.propTypes = {
	students: PropTypes.array.isRequired
};

export default AllStudents;

import React from 'react';
import AllStudents from './AllStudents';
import { getStudents } from './helpers/actions';

class StudentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			error: null,
			loading: false
		};
	}

	render() {
		const { error, students, loading } = this.state;
		if (loading) {
			return <div>Loading Results...</div>;
		}
		if (error) {
			return <div>{error}</div>;
		}
		return <AllStudents students={students} />;
	}

	componentDidMount() {
		// getStudents()
		// 	.then(res => {
		// 		this.setState({
		// 			students: res.data,
		// 			loading: false
		// 		});
		// 	})
		// 	.catch(error => {
		// 		this.setState({
		// 			error: error.message,
		// 			loading: false
		// 		});
		// 	});
	}
}

export default StudentsContainer;

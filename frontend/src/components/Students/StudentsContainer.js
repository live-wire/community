import React from 'react';
import AllStudents from './AllStudents';
import { getStudents } from './actions';

class StudentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			loading: false
		};
	}

	render() {
		const { students, loading } = this.state;
		return <AllStudents students={students} />;
	}

	componentDidMount() {
		const {token} = this.props;
		getStudents(token)
			.then(res => {
				console.log(res);
				debugger
				// this.setState({
				// 	students: res.data,
				// 	loading: false
				// });
			})
			.catch(error => {
				console.log(error);
				debugger
				// this.setState({
				// 	error: error.message,
				// 	loading: false
				// });
			});
	}
}

export default StudentsContainer;

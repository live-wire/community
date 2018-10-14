import React from 'react';
import AllStudents from './AllStudents';
import { getStudents } from './fake/api';

class StudentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			error: null,
			loading: true
		};
	}

	render() {
		const { error, list, loading } = this.state;
		if (loading) {
			return <div>Loading Results...</div>;
		}
		if (error) {
			return <div>{error}</div>;
		}
		return <AllStudents list={list} />;
	}

	componentDidMount() {
		getStudents()
			.then(res => {
				this.setState({
					list: res.data,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					error: error.message,
					loading: false
				});
			});
	}
}

export default StudentsContainer;

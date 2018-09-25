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
		return (
			<div>
				{loading && <div>Loading Results...</div>}
				{!loading && error && <div>{error}</div>}
				{!loading && !error && <AllStudents list={list} />}
			</div>
		);
	}

	componentDidMount() {
		getStudents()
			.then(res => {
				this.setState({
					list: res.data,
					error: null,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					list: [],
					error: error.message,
					loading: false
				});
			});
	}
}

export default StudentsContainer;

import React from 'react';
import AllStudents from './AllStudents';
import { getStudents } from './actions';

class StudentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			next: null,
			previous: null,
			loading: true
		};
	}

	render() {
		const { students, next, prev, loading } = this.state;
		return <AllStudents students={students} next={next} prev={prev} loading={loading} />;
	}

	componentDidMount() {
		const {token} = this.props;
		getStudents(token)
			.then(res => {
				this.setState({
					students: res.data.results,
					prev: res.data.prev,
					next: res.data.next,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					loading: false
				});
			});
	}
}

export default StudentsContainer;

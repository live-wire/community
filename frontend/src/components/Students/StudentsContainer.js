import React from 'react';
import AllStudents from './AllStudents';
import { getStudents } from './actions';
import withSidebar from '../../framework/hoc/withSidebar';
import withHeader from '../../framework/hoc/withHeader';

const initialState = {
	students: [],
	next: null,
	previous: null,
	loading: true
};

class StudentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };

		this.fetchStudents = this.fetchStudents.bind(this);
	}

	fetchStudents(paramsObj) {
		getStudents(paramsObj)
			.then(res => {
				this.setState({
					students: res.data.results,
					prev: res.data.previous,
					next: res.data.next,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					loading: false
				});
			});

		this.setState({ ...initialState });
	}

	render() {
		const { students, next, prev, loading } = this.state;
		return (
			<AllStudents
				students={students}
				next={next}
				prev={prev}
				loading={loading}
				fetch={this.fetchStudents}
			/>
		);
	}

	componentDidMount() {
		this.fetchStudents(null);
	}
}

export default withSidebar(withHeader(StudentsContainer));

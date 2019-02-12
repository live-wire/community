import React from 'react';
import Teachers from '../components/Teachers';
import { getTeachers } from '../pages/Teachers/actions';
import withSidebar from '../framework/hoc/withSidebar';
import withHeader from '../framework/hoc/withHeader';

const initialState = {
	teachers: [],
	next: null,
	prev: null,
	loading: true
};
class TeachersContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };

		this.fetchTeachers = this.fetchTeachers.bind(this);
	}

	fetchTeachers(paramsObj) {
		getTeachers(paramsObj)
			.then(res => {
				this.setState({
					teachers: res.data.results,
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
		const { teachers, next, prev, loading } = this.state;
		return (
			<Teachers
				teachers={teachers}
				next={next}
				prev={prev}
				loading={loading}
				fetch={this.fetchTeachers}
			/>
		);
	}

	componentDidMount() {
		this.fetchTeachers(null);
	}
}

export default withSidebar(withHeader(TeachersContainer));

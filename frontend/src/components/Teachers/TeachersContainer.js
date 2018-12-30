import React from 'react';
import AllTeachers from './AllTeachers';
import {getTeachers} from './actions';

class TeachersContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teachers: [],
			next: null,
			previous: null,
			loading: true
		};
	}

	render() {
		const { teachers, next, prev, loading } = this.state;
		return <AllTeachers teachers={teachers} next={next} prev={prev} loading={loading} />;
	}

	componentDidMount() {
		const {token} = this.props;
		getTeachers(token)
			.then(res => {
				this.setState({
					teachers: res.data.results,
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

export default TeachersContainer;

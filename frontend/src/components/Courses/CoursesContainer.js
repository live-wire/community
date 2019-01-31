import React from 'react';
import AllCourses from './AllCourses';
import { getCourses } from './actions';
import withSidebar from '../../framework/hoc/withSidebar';
import withHeader from '../../framework/hoc/withHeader';
class CoursesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: [],
			next: null,
			previous: null,
			loading: true
		};
	}

	render() {
		const { courses, next, prev, loading } = this.state;
		return (
			<AllCourses courses={courses} next={next} prev={prev} loading={loading} />
		);
	}

	componentDidMount() {
		const { token } = this.props;
		getCourses(token)
			.then(res => {
				this.setState({
					courses: res.data.results,
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

export default withSidebar(withHeader(CoursesContainer));

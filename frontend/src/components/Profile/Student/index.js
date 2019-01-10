import React from 'react';
import styled from 'styled-components';
import {Input, Segment, Label} from 'semantic-ui-react';

const StyledLabel = styled(Label)`
	&&&&& {
		background-color: rgb(250, 249, 251);
	}
`;

class StudentProfile extends React.Component {
	render() {
		return (
			<div>
				<Segment>
					<StyledLabel attached="top" size="big">Personal</StyledLabel>
					<Input placeholder="Nickname" fluid />
					<Input placeholder="Hometown" fluid />
					<Input placeholder="HomePage" fluid />
				</Segment>
				<Segment>
					<StyledLabel attached="top" size="big">Social Networks</StyledLabel>
					<Input placeholder="Facebook" fluid />
					<Input placeholder="Google" fluid />
					<Input placeholder="Twitter" fluid />
					<Input placeholder="Linkedin" fluid />
				</Segment>
				<Segment>
					<StyledLabel attached="top" size="big">Contact Information</StyledLabel>
					<Input placeholder="Email" fluid />
					<Input placeholder="Address 1" fluid />
					<Input placeholder="Home Phone" fluid />
					<Input placeholder="Address 2" fluid />
					<Input placeholder="Business Phone" fluid />
					<Input placeholder="City" fluid />
				</Segment>
				<Segment>
					<StyledLabel attached="top" size="big">Education and Work</StyledLabel>
					<Input placeholder="Employer" fluid />
					<Input placeholder="High School" fluid />
					<Input placeholder="Position" fluid />
					<Input placeholder="University" fluid />
				</Segment>
			</div>
		);
	}
}

export default StudentProfile;

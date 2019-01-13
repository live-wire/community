import React from 'react';
import {Input} from 'semantic-ui-react';
import styled from 'styled-components';
import withSidebar from '../../../framework/hoc/withSidebar';
import Flex from '../Flex';
import Box from '../Box';
import FormSection from '../FormSection';
import FormLabel from '../FormLabel';

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
`;

class StudentProfile extends React.Component {
	render() {
		return (
			<Container>
				<FormSection title="Personal Details">
					<Box borderBottom>
						<Flex.Container
							flexDirection="row"
							justifyContent="space-between"
							alignItems="center">
							<Flex.Child
								flexBasis="50%">
								<FormLabel>Nickname</FormLabel>
							</Flex.Child>
							<Flex.Child
								flexBasis="50%">
								<Input placeholder="Nickname" fluid/>
							</Flex.Child>
						</Flex.Container>
					</Box>
					<Box borderBottom>
						<Flex.Container
							flexDirection="row"
							justifyContent="space-between"
							alignItems="center">
							<Flex.Child
								flexBasis="50%">
								<FormLabel>Homepage</FormLabel>
							</Flex.Child>
							<Flex.Child
								flexBasis="50%">
								<Input placeholder="Homepage" fluid/>
							</Flex.Child>
						</Flex.Container>
					</Box>
					<Box>
						<Flex.Container
							flexDirection="row"
							justifyContent="space-between"
							alignItems="center">
							<Flex.Child
								flexBasis="50%">
								<FormLabel>Hometown</FormLabel>
							</Flex.Child>
							<Flex.Child
								flexBasis="50%">
								<Input placeholder="Hometown" fluid/>
							</Flex.Child>
						</Flex.Container>
					</Box>
				</FormSection>
			</Container>
		);
	}
}

export default withSidebar(StudentProfile);


// <div>
			// 	<FormSection>
			// 		<FormSectionHeader>Personal Details</FormSectionHeader>
			// 		<StyledFormFieldContainer>
			// 			<StyledLabel>Nickname</StyledLabel>
			// 			<StyledFormField>
			// 				<Input placeholder="Nickname" fluid />
			// 			</StyledFormField>
			// 		</StyledFormFieldContainer>

			// 		<StyledFormFieldContainer>
			// 			<StyledLabel>Hometown</StyledLabel>
			// 			<StyledFormField>
			// 				<Input placeholder="Hometown" fluid />
			// 			</StyledFormField>
			// 		</StyledFormFieldContainer>

			// 		<StyledFormFieldContainer>
			// 			<StyledLabel>Homepage</StyledLabel>
			// 			<StyledFormField>
			// 				<Input placeholder="Homepage" fluid />
			// 			</StyledFormField>
			// 		</StyledFormFieldContainer>
			// 	</FormSection>

			// 	<Flex direction="row"

			/* <Segment>
				<StyledLabel attached="top" size="big">Personal</StyledLabel>
				<Form>
					<Form.Field inline>
						<label>Nickname</label>
						<input placeholder="Nickname" fluid />
					</Form.Field>
					<Form.Field inline>
						<label>Hometown</label>
						<input placeholder="Hometown" fluid />
					</Form.Field>
					<Form.Field inline>
						<label>Homepage</label>
						<input placeholder="Homepage" fluid />
					</Form.Field>
				</Form>
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
			</Segment> */

		// </div>

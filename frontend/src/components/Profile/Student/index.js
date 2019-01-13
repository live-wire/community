import React from 'react';
import {Input} from 'semantic-ui-react';
import styled from 'styled-components';
import withSidebar from '../../../framework/hoc/withSidebar';
import Flex from '../../../framework/components/Flex';
import Box from '../../../framework/components/Box';
import FormSection from '../../../framework/components/Form/FormSection';
import FormLabel from '../../../framework/components/Form/FormLabel';

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
`;

const forms = [
	{
		title: 'Personal Details',
		fields: [
			{
				label: 'Nickname',
				placeholder: 'Nickname'
			},
			{
				label: 'Hometown',
				placeholder: 'Hometown'
			},
			{
				label: 'Homepage',
				placeholder: 'Homepage'
			}
		]
	},
	{
		title: 'Social Networks',
		fields: [
			{
				label: 'Facebook',
				placeholder: 'Facebook'
			},
			{
				label: 'Google',
				placeholder: 'Google'
			},
			{
				label: 'Twitter',
				placeholder: 'Twitter'
			},
			{
				label: 'Linkedin',
				placeholder: 'Linkedin'
			}
		]
	},
	{
		title: 'Contact Information',
		fields: [
			{
				label: 'Email',
				placeholder: 'Email'
			},
			{
				label: 'Phone',
				placeholder: 'Phone'
			},
			{
				label: 'City',
				placeholder: 'City'
			},
			{
				label: 'State',
				placeholder: 'State'
			},
			{
				label: 'Country',
				placeholder: 'Country'
			}
		]
	},
	{
		title: 'Education and Work',
		fields: [
			{
				label: 'High School',
				placeholder: 'High School'
			},
			{
				label: 'University',
				placeholder: 'University'
			}
		]
	}
];
class StudentProfile extends React.Component {
	render() {
		return (
			<Container>
				<form>
					{forms.map(form => (
						<FormSection key={form.title} title={form.title}>
							{form.fields.map(field => (
								<Box key={field.label} borderBottom>
									<Flex.Container
										flexDirection="row"
										justifyContent="space-between"
										alignItems="center">
										<Flex.Child
											flexBasis="50%">
											<FormLabel>{field.label}</FormLabel>
										</Flex.Child>
										<Flex.Child
											flexBasis="50%">
											<Input placeholder={field.placeholder} fluid/>
										</Flex.Child>
									</Flex.Container>
								</Box>
							))}
						</FormSection>
					))}
				</form>
			</Container>
		);
	}
}

export default withSidebar(StudentProfile);

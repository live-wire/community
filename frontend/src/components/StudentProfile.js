import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';
import AvatarEditor from 'react-avatar-editor';
import withSidebar from '../framework/hoc/withSidebar';
import Flex from '../framework/components/basic/Flex';
import Box from '../framework/components/basic/Box';
import FormSection from '../framework/components/derived/FormSection';
import Label from '../framework/components/derived/Label';
import withHeader from '../framework/hoc/withHeader';
import Avatar from './Avatar';

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
	constructor(props) {
		super(props);

		this.state = {
			file:
				'https://img.timesnownews.com/story/1547727851-taapseepannug78.jpg?d=600x450'
		};
	}

	handleChange = event => {
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		});
	};

	render() {
		return (
			<div>
				{/* <input type="file" onChange={this.handleChange} />

				<AvatarEditor
					image={this.state.file}
					width={250}
					height={250}
					border={50}
					color={[255, 255, 255, 0.6]} // RGBA
					scale={1.2}
					rotate={0}
				/> */}
				<Avatar
					src={this.state.file}
					alt="Profile Picture"
					clickHandler={() => this.avatarRef.click()}
				/>

				<input
					type="file"
					accept="image/jpeg, image/png"
					onChange={this.handleChange}
					ref={node => (this.avatarRef = node)}
					style={{ display: 'none' }}
				/>

				<form>
					{forms.map(form => (
						<FormSection key={form.title} title={form.title}>
							{form.fields.map(field => (
								<Box key={field.label} borderBottom>
									<Flex.Container
										flexDirection="row"
										justifyContent="space-between"
										alignItems="center">
										<Flex.Child flexBasis="50%">
											<Label>{field.label}</Label>
										</Flex.Child>
										<Flex.Child flexBasis="50%">
											<Input placeholder={field.placeholder} fluid />
										</Flex.Child>
									</Flex.Container>
								</Box>
							))}
						</FormSection>
					))}
				</form>
			</div>
		);
	}
}

export default withSidebar(withHeader(StudentProfile));

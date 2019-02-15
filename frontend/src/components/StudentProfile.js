import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';
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
			file: null,
			preview: null
		};
	}

	submitForm = () => {
		var data = new FormData();
		data.append('image', this.state.file);
		console.log('data', data);
		// fetch("http://localhost:8910/taskCreationController/createStoryTask", {
		// 	method: "POST",
		//   body: data
		// }).then(function (res) {
		//   if (res.ok) {
		//     alert("Perfect! ");
		//   } else if (res.status == 401) {
		//     alert("Oops! ");
		//   }
		// }, function (e) {
		//   alert("Error submitting form!");
		// });
	};

	handleChange = event => {
		this.setState(
			{
				file: event.target.files[0],
				preview: URL.createObjectURL(event.target.files[0])
			},
			() => this.submitForm()
		);
	};

	render() {
		return (
			<div>
				<div>
					<Avatar
						src={this.state.preview}
						alt="Profile Picture"
						clickHandler={() => this.avatarRef.click()}
					/>
					<form encType="multipart/form-data">
						<input
							type="file"
							accept="image/jpeg, image/png"
							onChange={this.handleChange}
							ref={node => (this.avatarRef = node)}
							style={{ display: 'none' }}
						/>
					</form>
				</div>

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

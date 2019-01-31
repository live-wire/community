import React from 'react';
import Box from '../../basic/Box';
import SectionHeading from '../SectionHeading';
import Text from '../../basic/Text';

const FormSection = ({ title, children }) => (
	<Box
		noPadding
		marginBottom
		borderAll
		borderColor="rgb(209, 202, 216)"
		borderRadius="4px"
		boxShadow="rgba(37, 11, 54, 0.04) 0px 2px 0px">
		<Box
			borderBottom
			borderColor="rgb(209, 202, 216)"
			backgroundColor="rgb(250, 249, 251)">
			<SectionHeading>{title}</SectionHeading>
		</Box>
		<div>{children}</div>
	</Box>
);

export default FormSection;

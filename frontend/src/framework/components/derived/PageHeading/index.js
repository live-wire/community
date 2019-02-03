import React from 'react';
import Text from '../../basic/Text';
import Box from '../../basic/Box';

const PageHeading = ({ children }) => (
	<Box marginBottom noPadding backgroundColor="transparent">
		<Text color="#2f2936" fontSize="22px" lineHeight="1.5em">
			{children}
		</Text>
	</Box>
);

export default PageHeading;

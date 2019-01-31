import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Box from '../../framework/components/basic/Box';
import Flex from '../../framework/components/basic/Flex';

const Header = ({ logUserOut }) => (
	<Box borderBottom boxShadow="rgba(37, 11, 54, 0.04) 0px 2px 0px">
		<Flex.Container flexDirection="row" justifyContent="flex-end">
			<Flex.Child>
				<Dropdown text="Dhruv" direction="left">
					<Dropdown.Menu>
						<Dropdown.Item text="Sign Out" onClick={() => logUserOut()} />
					</Dropdown.Menu>
				</Dropdown>
			</Flex.Child>
		</Flex.Container>
	</Box>
);

export default Header;

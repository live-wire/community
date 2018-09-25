import React from 'react';
import { Button, Input, Icon, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLogin = styled.div`
	width: 500px;
	background-color: #ffffff;
	border: 1px solid #dddfe2;
	border-radius: 3px;
	padding: 100px;
`;

const Login = props => {
	const {
		user,
		password,
		error,
		showPassword,
		loading,
		isEnabled,
		handleInputChange,
		handleToggleShowPassword,
		handleSubmit
	} = props;

	return (
		<Container>
			<StyledLogin>
				<Header as="h2" textAlign="center">
					Community Login
				</Header>
				<form className="margin-t-50" onSubmit={handleSubmit}>
					<Input
						className="margin-b-10"
						fluid
						type="text"
						name="user"
						placeholder="Username or Email"
						value={user}
						onChange={handleInputChange}
						autoComplete="off"
					/>
					{showPassword ? (
						<Input
							className="margin-b-10"
							fluid
							type="text"
							name="password"
							placeholder="Password"
							value={password}
							onChange={handleInputChange}
							icon={<Icon name="eye" link onClick={handleToggleShowPassword} />}
						/>
					) : (
						<Input
							className="margin-b-10"
							fluid
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={handleInputChange}
							icon={
								<Icon
									name="eye slash"
									link
									onClick={handleToggleShowPassword}
								/>
							}
						/>
					)}
					<Button
						fluid
						primary
						type="submit"
						disabled={!isEnabled}
						loading={loading}>
						Log In
					</Button>
				</form>
			</StyledLogin>
		</Container>
	);
};

export default Login;

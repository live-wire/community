import React from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledLogin = styled.div`
	width: 500px;
	margin-left: auto;
	margin-right: auto;
	background-color: #ffffff;
	border: 1px solid #dddfe2;
	border-radius: 3px;
	padding: 50px 100px;
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
		<StyledLogin>
			<h2 className="text-center">Login to Community</h2>
			<form onSubmit={handleSubmit}>
				<Input
					className="margin-b-10"
					focus
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
							<Icon name="eye slash" link onClick={handleToggleShowPassword} />
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
	);
};

export default Login;

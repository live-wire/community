import React from 'react';
import styled from 'styled-components';

const Notice = styled.div`
	text-align: center;
	font-size: 15px;
	font-weight: 600;
	padding: 15px;
	background-color: #ede04d;
	color: #212200;
`;

const Logo = styled.div`
	display: flex;
	height: 105px;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-size: 30px;
`;

const StyledForm = styled.form`
	margin: 0 auto;
	width: 470px;
	padding: 40px;
	background: #ffffff;
	border-radius: 3px;

	legend {
		text-align: center;
		font-weight: 300;
		color: #444;
		margin: 0 auto 45px;
		font-size: 35px;
		line-height: 38px;
		text-transform: none; /* Why? */
		letter-spacing: 0; /* Why? */
	}

	::-webkit-input-placeholder {
		color: #afafaf;
		font-size: 18px;
	}

	input[type='text'],
	input[type='password'],
	input[type='submit'] {
		font-family: helvetica;
		background: #fcfcfc;
		border: 2px solid #e7e7e7;
		margin: 20px auto;
		width: 100%;
		padding: 15px;
		display: block;
		border-radius: 3px;
		font-size: 18px;
		transition: opacity 0.4s;
		text-align: left;
		height: auto;
		line-height: 22px;
	}

	input[type='submit'] {
		color: #ffffff;
		background: #15cd72;
		border: 0;
		font-weight: 600;
		text-align: center;
		cursor: pointer;
		margin-bottom: 0;
		height: auto;

		&:hover {
			background: #0cb863;
			transition: background 0.1s;
		}
	}

	p {
		font-size: 18px;
		line-height: 1.5;
		text-align: center;
		margin: 0;
		margin-top: 20px;
		color: #666;

		a {
			color: #0069ff;
			text-decoration: none;
		}
	}
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
		<div className="Login">
			{error && <Notice>{error.message}</Notice>}
			<Logo>Community</Logo>
			<StyledForm onSubmit={handleSubmit}>
				<legend>Log In</legend>
				<input
					type="text"
					name="user"
					placeholder="Username or Email"
					value={user}
					onChange={handleInputChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handleInputChange}
				/>
				<input type="submit" disabled={!isEnabled} value="Log In" />
			</StyledForm>
		</div>
	);
};

export default Login;

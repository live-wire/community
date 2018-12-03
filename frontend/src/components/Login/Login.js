import React from 'react';
import styled from 'styled-components';

const Notice = styled.div`
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	padding: 15px;
	background-color: #ede04d;
	color: #212200;
`;

const Legend = styled.legend`
	text-align: center;
	font-weight: 400;
	color: #444;
	margin: 0 auto 45px;
	font-size: 35px;
`;

const LoginForm = styled.form`
	margin: 0 auto;
	width: 500px;
	padding: 40px;
	background: #ffffff;

	::-webkit-input-placeholder {
		color: #afafaf;
		font-size: 18px;
	}
`;

const FormInput = styled.input`
	font-family: helvetica;
	background: #fcfcfc;
	border: 2px solid #e7e7e7;
	margin: 20px auto;
	width: 100%;
	padding: 15px;
	display: block;
	border-radius: 3px;
	font-size: 18px;
	line-height: 1.5em;

	&:focus {
		outline : none;
	}
`;

const LoginButton = styled.input`
	display: block;
	font-family: helvetica;
	color: #ffffff;
	background: #15cd72;
	border: 0;
	border-radius: 3px;
	font-weight: 600;
	line-height: 1.5em;
	font-size: 18px;
	text-align: center;
	cursor: pointer;
	margin: 20 auto 0;
	padding: 15px;
	width: 100%;

	&:hover {
		background: #0cb863;
		transition: background 0.1s;
	}

	&:focus {
		outline : none;
	}
`;

const Login = props => {
	const {
		user,
		password,
		error,
		loading,
		isEnabled,
		handleInputChange,
		handleSubmit
	} = props;

	return (
		<div className="Login">
			{error && <Notice>{error.message}</Notice>}
			<LoginForm onSubmit={handleSubmit}>
				<Legend>Log In</Legend>
				<FormInput
					type="text"
					name="user"
					placeholder="Username or Email"
					value={user}
					onChange={handleInputChange}
				/>
				<FormInput
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={handleInputChange}
				/>
				<LoginButton
					type="submit"
					disabled={!isEnabled}
					value={loading ? 'Logging In' : 'Log In'}
				/>
			</LoginForm>
		</div>
	);
};

export default Login;

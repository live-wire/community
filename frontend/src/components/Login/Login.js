import React from 'react';

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
			{error && <div className="notice">{error.message}</div>}
			<div className="logo">Community</div>
			<form className="vertical-form" onSubmit={handleSubmit}>
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
				<p>
					<a>Forgot Password?</a>
				</p>
			</form>
		</div>
	);
};

export default Login;

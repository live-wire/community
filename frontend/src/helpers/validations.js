export const isValidUsername = value => value.length > 0;

export const isValidEmail = value => {
	const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return reg.test(value);
};

export const isValidPassword = value => value.length > 0;

export const isValidUser = value => {
	if (value.includes('@')) {
		return isValidEmail(value);
	} else {
		return isValidUsername(value);
	}
};

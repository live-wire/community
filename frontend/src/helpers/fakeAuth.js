const error = {
	message: 'Please try again'
};

const random = () => {
	const values = [false, true];
	const index = Math.round(Math.random());
	return values[index];
}

const wait = time => new Promise((resolve, reject) => {
	setTimeout(() => {
		if(random()) {
			resolve();
		}
		else{
			reject(error);
		}
	}, time);
	}
);

const login = () => {
	return wait(2000);
}

const logout = () => {
	return wait(3000);
}

export default {
	login,
	logout
};

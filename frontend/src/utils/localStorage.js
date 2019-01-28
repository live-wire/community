export const getKey = key =>
	localStorage.getItem('community') &&
	JSON.parse(localStorage.getItem(community))[key];

export const setKey = (key, value) =>
	localStorage.setItem(
		'community',
		JSON.stringify({
			...(localStorage.getItem('community')
				? JSON.parse(localStorage.getItem('community'))
				: {}),
			[key]: value
		})
	);

export const deleteKey = key =>
	localStorage.setItem(
		'community',
		JSON.stringify({
			...(localStorage.getItem('community')
				? JSON.parse(localStorage.getItem('community'))
				: {}),
			[key]: undefined
		})
	);

export const burnStore = () => localStorage.removeItem('community');

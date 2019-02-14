import { palette as p } from 'styled-tools';

const theme = {
	white: '#ffffff',
	whiteText: p('black'),

	black: '#212121',
	blackText: p('white'),

	// https://coolors.co/4a3e56-d5c5c8-9da3a4-db7f8e-ffdbda
	primary: ['#4a3e56'],
	primaryText: [p('white')],

	// https://coolors.co/f44336-ef5350-e57373-ef9a9a-ffcdd2
	danger: ['#f44336', '#ef5350', '#e57373', '#ef9a9a', '#ffcdd2'],
	dangerText: [p('white'), p('white'), p('black'), p('black'), p('black')],

	// https://coolors.co/ffdd32-ffe566-ffeb8c-fff2b2-fff8d8
	alert: ['#ffdd32', '#ffe566', '#ffeb8c', '#fff2b2', '#fff8d8'],
	alertText: [p('black'), p('black'), p('black'), p('black'), p('black')],

	// https://coolors.co/4caf50-66bb6a-81c784-a5d6a7-c8e6c9
	success: ['#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9'],
	successText: [p('white'), p('white'), p('white'), p('black'), p('black')],

	grayscale: [
		p('black'),
		'#414141',
		'#616161',
		'#9e9e9e',
		'#bdbdbd',
		'#eaeaea',
		'#f5f5f5',
		p('white')
	],
	grayscaleText: [
		p('white'),
		p('white'),
		p('white'),
		p('black'),
		p('black'),
		p('black'),
		p('black'),
		p('black')
	],

	background: [
		p('grayscale', -4),
		p('grayscale', -3),
		p('grayscale', -2),
		p('grayscale', -1)
	],
	backgroundText: p('black'),

	shadow: [
		'rgba(0, 0, 0, 0.9)',
		'rgba(0, 0, 0, 0.7)',
		'rgba(0, 0, 0, 0.5)',
		'rgba(0, 0, 0, 0.3)',
		'rgba(0, 0, 0, 0.15)',
		'rgba(0, 0, 0, 0.075)'
	],
	shadowText: [
		p('white'),
		p('white'),
		p('white'),
		p('black'),
		p('black'),
		p('black')
	],

	transparent: 'transparent',
	transparentText: p('black'),

	border: p('shadow', -2),

	sidebar: {
		background: '#2f2936',
		link: {
			color: '#9586a5',
			hover: '#bdb4c7'
		}
	}
};

export default theme;

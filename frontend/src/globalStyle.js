import {injectGlobal} from 'styled-components';
console.log(injectGlobal);
injectGlobal`
	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	::selection {
		background: #0069ff;
		color: #fff;
	}

	body {
		margin: 0 auto;
		padding: 0;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5;
		font-family: 'helvetica', 'arial', sans-serif;
		color: #676767;
		background: #ffffff;
	}

	a {
		text-decoration: none;
		color: #3b6ecc;
		outline: none;
		background-color: transparent;
		cursor: pointer;
		transition: color 0.2s linear;

		&:hover,
		&:focus {
			color: #274d94;
		}
	}

	ul {
		padding: 0;
		margin: 0;

		li {
			list-style: none;
		}
	}
`

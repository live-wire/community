import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalStyle from './GlobalStyle';
import theme from './theme/theme';
// import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<React.Fragment>
			<GlobalStyle />
			<Router>
				<App />
			</Router>
		</React.Fragment>
	</ThemeProvider>,
	document.getElementById('root')
);

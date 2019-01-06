import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grommet } from 'grommet';
import App from './components/App';
import './globalStyle';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
	<Router>
		<Grommet plain>
			<App />
		</Grommet>
	</Router>,
	document.getElementById('root')
);

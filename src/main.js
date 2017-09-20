// dependancies
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.min.css';
import './styles/main.css';

// custom components
import App from './app/AppContainer';
import appActions from './app/appActions';

// other scripts
import { setStore, history } from './store';

const app = document.getElementById('app');

ReactDOM.render(<App store={setStore()} history={history} />, app);

//dependancies
import React from "react";
import ReactDOM from "react-dom";

//custom components
import App from './modules/app/AppContainer.js';
import appActions from './modules/app/appActions.js';

//other scripts
import { setStore, history } from './store.js';

const app = document.getElementById('app');

ReactDOM.render(<App store={ setStore()} history={history} />, app);

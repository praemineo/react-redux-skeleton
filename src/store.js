import { createStore, applyMiddleware } from 'redux';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './app/combineReducers';

export const history = createHistory();

const reduxRouterMW = routerMiddleware(history);

export const setStore = (defaultState = {}) => createStore(
  reducers,
  defaultState,
  applyMiddleware(thunk, reduxRouterMW, createLogger({
    level: 'info',
    collapsed: true,
  })));


// export const setStore = (defaultState = {}) => {
//   return createStore(reducers, defaultState, applyMiddleware(thunk, reduxRouterMW));
// }

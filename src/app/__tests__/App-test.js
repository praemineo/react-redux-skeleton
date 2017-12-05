import React from 'react';
import App from '../AppContainer';
import TestUtils from 'react-dom/test-utils';
import { store, history } from '../../store';
 
describe('App', () => {
  it('renders', () => {
    const element = TestUtils.renderIntoDocument(<App store={store} history={history} />);
    expect(element).toBeTruthy();
  });
});

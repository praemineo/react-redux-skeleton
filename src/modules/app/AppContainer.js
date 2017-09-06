import React from 'react';

import { connect ,Provider } from "react-redux";
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Routes from './Routes.js';
import Layout from './components/Layout.js';

class App extends React.Component {
  render() {
    const store = this.props.store;

    return <Provider store={store} >
	       		<ConnectedRouter history={this.props.history} >
					<Layout >
						<Routes/>
					</Layout>
		   		</ConnectedRouter>
			 </Provider>
  }
}

export default App

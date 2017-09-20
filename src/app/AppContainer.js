import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Routes from './Routes';
import Layout from './components/Layout';

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

export default App;


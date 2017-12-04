import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import Layout from './components/Layout';

class App extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <Provider store={store}>
					<Layout history={this.props.history}>
						<Routes />
					</Layout>
			</Provider>
    );
  }
}

export default App;


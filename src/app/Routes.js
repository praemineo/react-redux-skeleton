import React from 'react';
import getRoutes from './routeConfig';

import { Route, Switch } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (<Switch>
      <Route exact path={getRoutes('home')} component={null} />
    </Switch>
    );
  }
}

export default Routes;

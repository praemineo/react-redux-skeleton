import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getRoutes from './routeConfig';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={getRoutes('home')} component={null} />
      </Switch>
    );
  }
}

export default Routes;

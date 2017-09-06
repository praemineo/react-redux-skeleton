import React from "react";
import { connect } from 'react-redux';

import Header from "./Header.js"
import Footer from "./Footer.js"
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
};

class Layout extends React.Component {
  render() {
    const theme = getMuiTheme(lightBaseTheme);

    return (<MuiThemeProvider muiTheme={theme}> 
          <div>
            <Header />
            <div>
              { this.props.children }
            </div>
            <Footer />
        </div>
      </MuiThemeProvider>)
  }
}

export default connect(mapStateToProps)(Layout);

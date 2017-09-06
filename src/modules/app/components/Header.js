import React from 'react';

class Header extends React.Component {
  handleMenutoggle() {
    this.props.dispatch(appActions.toggleMenu());
  }

  render() {
    return null;
  }
}

export default Header
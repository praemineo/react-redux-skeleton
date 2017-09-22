import React from 'react';
import Subheader from 'material-ui/Subheader';
import { push } from 'react-router-redux';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionHelp from 'material-ui/svg-icons/action/help';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationContact from 'material-ui/svg-icons/communication/contacts';
import MenuListItem from './MenuListItem';
import appActions from '../../appActions';

class NavigationMenuItems extends React.Component {
  handleHomeClick() {
    this.props.dispatch(push('/'));
    this.props.dispatch(appActions.toggleMenu());
  }

  handleAboutClick() {
    this.props.dispatch(push('/About'));
    this.props.dispatch(appActions.toggleMenu());
  }

  handleUpdatesClick() {
    this.props.dispatch(push('/Updates'));
    this.props.dispatch(appActions.toggleMenu());
  }

  handleContactMeClick() {
    this.props.dispatch(push('/Feedback'));
    this.props.dispatch(appActions.toggleMenu());
  }

  render() {
    return (
      <div>
        <Subheader><b>Navigatation</b></Subheader>
        <MenuListItem 
          primaryText="Home"
          leftIcon={<ActionHome />}
          onClick={this.handleHomeClick.bind(this)}
        />
        <MenuListItem
          primaryText="Player"
          show="players"
          leftIcon={<CommunicationContact />}
        />
        <MenuListItem
          primaryText="About"
          leftIcon={<ActionInfo />}
          onClick={this.handleAboutClick.bind(this)}
        />
        <MenuListItem
          primaryText="Updates"
          leftIcon={<ActionHelp />}
          onClick={this.handleUpdatesClick.bind(this)}
        />
        <MenuListItem
          primaryText="Contact Me"
          leftIcon={<CommunicationEmail />}
          onClick={this.handleContactMeClick.bind(this)}
        />
      </div>
    );
  }
}

export default NavigationMenuItems;

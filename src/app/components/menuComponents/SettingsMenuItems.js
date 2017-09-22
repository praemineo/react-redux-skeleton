import React from 'react';
import Settings from 'material-ui/svg-icons/action/settings';
import MenuListItem from './MenuListItem';
import appActions from '../../appActions';

class SettingsMenuItems extends React.Component {
  handleThemeChange() {
    this.props.dispatch(appActions.themeChanged());
  }

  handleToggleSettingsClick() {
    this.props.dispatch(appActions.toggleSettings());
  }

  render() {
    const menuItems = [
      <MenuListItem
        key={1}
        toggle
        toggleText="Light Theme"
        toggleValue={this.props.values.lightTheme}
        onToggle={this.handleThemeChange.bind(this)} 
      />,
    ];

    return (
      <div>
        <MenuListItem
          primaryText="Settings"
          leftIcon={<Settings />}
          open={this.props.values.settingsShow}
          nestedItems={menuItems} 
          onClick={this.handleToggleSettingsClick.bind(this)}
        />
      </div>);
  }
}

export default SettingsMenuItems;

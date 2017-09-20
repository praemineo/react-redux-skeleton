import React from 'react';
import MenuListItem from './MenuListItem';
import Settings from 'material-ui/svg-icons/action/settings';

import appActions from '../../appActions.js'
import playerSearchActions from '../../../home/playerSearchActions';

class SettingsMenuItems extends React.Component {
  handleThemeChange() {
    this.props.dispatch(appActions.themeChanged());
  }

  handleMiniCardsChange() {
    this.props.dispatch(playerSearchActions.toggleMiniCards());
  }

  handleClearClick() {
    this.props.dispatch(playerSearchActions.clearPinnedPlayers());
  }

  handleToggleSettingsClick() {
    this.props.dispatch(appActions.toggleSettings());
  }

  render() {
    const menuItems = [
      <MenuListItem key={0} primaryText = "Clear Pinned Players" show="/" onClick={this.handleClearClick.bind(this)}/>,
      <MenuListItem key={1} toggleText="Light Theme" toggle={true} toggleValue={this.props.values.lightTheme} onToggle={this.handleThemeChange.bind(this)}/>,
      <MenuListItem key={2} toggleText="Mini Cards" toggle={true} show="/" toggleValue={this.props.values.miniCards} onToggle={this.handleMiniCardsChange.bind(this)}/>,
    ];

    return (<div>
				<MenuListItem primaryText="Settings" leftIcon={<Settings />} open={this.props.values.settingsShow} nestedItems={menuItems} onClick={this.handleToggleSettingsClick.bind(this)}/>
			</div>);
  }
}

export default SettingsMenuItems;
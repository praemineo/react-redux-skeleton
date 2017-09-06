import React from 'react';
import { ListItem } from 'material-ui/List';
import MenuListToggle from './MenuListToggle';

class MenuListItem extends React.Component {
  render() {
    const styles = {

      nestedList: {
        marginLeft: '10px'
      },

      list: {
        fontWeight: 'bold',
        textAlign: 'left'
      }

    }

    const location = window.location.pathname;
    let show = true;

    if (this.props.show) {
      show = (this.props.show != location) ? false : true;
      if (location != '/' && location) {
        show = location.split('/').indexOf(this.props.show) > -1 ? true : false;
      }
    }

    let labelText = this.props.primaryText;

    const options = {};

    if (this.props.nestedItems) {
      options.nestedItems = this.props.nestedItems;
      options.nestedListStyle = styles.nestedList;
      options.open = this.props.open;
    }

    if (this.props.leftIcon) {
      options.leftIcon = this.props.leftIcon ;
    }

    if (this.props.toggle) {
      labelText = <MenuListToggle onToggle={ this.props.onToggle } value={this.props.toggleValue} labelText={this.props.toggleText}/>
    }

    const render = (<ListItem style={ styles.list } primaryText={ labelText } onClick={ this.props.onClick } { ...options }/>);

    return show ? render : null;
  }
}

export default MenuListItem;
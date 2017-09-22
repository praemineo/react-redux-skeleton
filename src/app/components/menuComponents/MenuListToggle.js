import React from 'react';
import Toggle from 'material-ui/Toggle';

class MenuListToggle extends React.Component {
  render() {
    const style = {
      height: '100%',
      // paddingTop: '12px',
      width: '165px';
    };

    const styles = {
      thumbOff: {
        backgroundColor: '#ffcccc',
      },
      trackOff: {
        backgroundColor: '#ff9d9d',
      },
      thumbSwitched: {
        backgroundColor: 'red',
      },
      trackSwitched: {
        backgroundColor: '#ff9d9d',
      },
    };

    return <Toggle
      label={ this.props.labelText }
      style={ style }
      toggled={ this.props.value }
      onToggle={ this.props.onToggle}
      thumbStyle={styles.thumbOff}
      trackStyle={styles.trackOff}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched} />
  }
}

export default MenuListToggle;
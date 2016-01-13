import React from 'react';

import styles from 'components/ListItem/ListItem.scss';

class ListItem extends React.Component {
  render () {
    return <li onClick={this.props.onClick} className={styles.item}>{this.props.text}</li>;
  }
}

ListItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

ListItem.defaultProps = {
  onClick: undefined,
  text: ''
};

export default ListItem;

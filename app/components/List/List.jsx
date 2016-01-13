import React from 'react';
import ListItem from 'components/ListItem/ListItem.jsx';

import styles from 'components/List/List.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Use webpack' },
        { id: 2, text: 'Spice with hot-loading' },
        { id: 3,text: '???' },
        { id: 4, text: 'Profit!' }
      ]
    };

  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter((x) => x.id != id)
    });
  }

  render () {
    return <ul className={styles.list}>
      {Object.keys(this.state.items).map((key) => {
        return <ListItem
          onClick={this.removeItem.bind(this, this.state.items[key].id)}
          key={this.state.items[key].id}
          text={this.state.items[key].text}
        />;
      })}
    </ul>;
  }
}

export default List;

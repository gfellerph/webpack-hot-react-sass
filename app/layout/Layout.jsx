import React from 'react';

import List from 'components/List/List.jsx';

import styles from 'layout/Layout.scss';

class Layout extends React.Component {
  render () {
    let cls = 'container ' + styles.app;
    return (
      <div className={cls}>
        <div className="row">
          <div className="col-sm-12">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;

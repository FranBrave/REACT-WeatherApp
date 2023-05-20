import React from 'react';

import styles from './notfound.module.scss';

function NotFound(props) {
  return (
    <div className={styles.container}>
      <h1>Page not found</h1>
    </div>
  );
}

export default NotFound;
import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;

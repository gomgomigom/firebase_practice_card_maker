import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
// import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const location = useLocation();
  const on = () => {
    authService.logout();
  };
  return (
    <section className={styles.maker}>
      <Header on={onLogout} />
      <h1>{location.state.id.slice(0, 4)}</h1>
      <Footer />
    </section>
  );
};

export default Maker;

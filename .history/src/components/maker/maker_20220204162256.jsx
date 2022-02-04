import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
// import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const location = useLocation();
  const onLogout = () => {};
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <h1>{location.state.id.slice(0, 4)}</h1>
      <Footer />
    </section>
  );
};

export default Maker;

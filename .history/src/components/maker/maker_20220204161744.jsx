import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
// import styles from './maker.module.css';

const Maker = (props) => {
  const location = useLocation();
  return (
    <section className={styles.section}>
      <Header />
      <Footer />
      <h1>{location.state.id.slice(0, 4)}</h1>
    </section>
  );
};

export default Maker;

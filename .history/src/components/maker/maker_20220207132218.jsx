import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
// import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}></div>
      <section className={styles.cardMaker}>
        <h1>{location.state.id.slice(0, 4)}</h1>
      </section>
      <section className={styles.cardPreview}>
        <h1>Card Preview</h1>
      </section>
      <Footer />
    </section>
  );
};

export default Maker;

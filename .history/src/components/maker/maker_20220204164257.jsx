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
      <h1>{location.state.id.slice(0, 4)}</h1>
      <Footer />
    </section>
  );
};

export default Maker;

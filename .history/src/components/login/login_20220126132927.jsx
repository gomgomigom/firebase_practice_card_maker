import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToMaker = (userId) => {
    navigate('/maker', { state: { id: userId } });
    console.log(location);
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.loginList}>
        <h1 className={styles.title}>Login</h1>
        <ul>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;

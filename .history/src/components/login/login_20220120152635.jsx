import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  handleLogin = (event) => {
    authService.login(event.currentTarget.text);
  };

  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={handleLogin}>Google</button>
          </li>
          <li>
            <button onClick={handleLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;

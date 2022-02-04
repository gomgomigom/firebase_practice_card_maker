import { BrowserRouter, Router } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Router exact path='/'>
          <Login authService={authService} />
        </Router>
        <Router path='/maker'>
          <Maker />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

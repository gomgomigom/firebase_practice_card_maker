import { BrowserRouter, Router } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Router exact path='/'>
          <Login authService={authService} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

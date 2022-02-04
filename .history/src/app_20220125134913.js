import { BrowserRouter } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Login authService={authService} />
      </BrowserRouter>
    </div>
  );
}

export default App;

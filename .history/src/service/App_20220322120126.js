import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from '../components/login/login';
import Maker from '../components/maker/maker';

function App({ FileInput, authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login authService={authService} />}></Route>
          <Route
            path='/maker'
            element={<Maker FileInput={FileInput} authService={authService} />}
          ></Route>
          <Route path='*' element={<p>There's nothing here!</p>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

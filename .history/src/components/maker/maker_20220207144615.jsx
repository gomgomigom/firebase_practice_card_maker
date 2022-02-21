import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
// import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Gom',
      company: 'AboutLaw',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gom@gom',
      message: 'go for it',
      fileName: 'gom',
      fileURL: 'gom.png',
    },
    {
      id: '2',
      name: 'Gom2',
      company: 'AboutLaw',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gom@gom',
      message: 'go for it',
      fileName: 'gom',
      fileURL: 'gom.png',
    },
    {
      id: '3',
      name: 'Gom3',
      company: 'AboutLaw',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gom@gom',
      message: 'go for it',
      fileName: 'gom',
      fileURL: 'gom.png',
    },
  ]);
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
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

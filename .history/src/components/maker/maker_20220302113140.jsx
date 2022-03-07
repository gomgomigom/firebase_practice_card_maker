import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
// import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Gom',
      company: 'AboutLaw',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'gom@gom',
      message: 'go for it',
      fileName: 'gom',
      fileURL: null,
    },
    2: {
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
    3: {
      id: '3',
      name: 'Gom3',
      company: 'AboutLaw',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'gom@gom',
      message: 'go for it',
      fileName: 'gom',
      fileURL: null,
    },
  });
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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = undefined;
      return updated;
    });
    console.log(card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

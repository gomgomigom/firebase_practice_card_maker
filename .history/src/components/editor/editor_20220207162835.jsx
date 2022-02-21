import React from 'react';
import Card from '../card/card';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1>Card Maker</h1>
    {cards.map((card) => {
      return <Card card={cards} />;
    })}
  </section>
);

export default Editor;

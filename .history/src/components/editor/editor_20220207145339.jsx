import React from 'react';
import Card from '../card/card';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1>Card Maker</h1>
    {cards.map((card) => {
      <Card cards={card} />;
    })}
  </section>
);

export default Editor;

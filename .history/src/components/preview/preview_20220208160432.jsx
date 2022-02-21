import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    cards;
  return (
    <section className={styles.preview}>
      <h1>Card Preview</h1>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </section>
  );
};

export default Preview;

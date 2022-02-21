import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1>Card Preview{cards.id}</h1>
    {/* {cards.map((card) => (
      <Card cards={card} />
    ))} */}
  </section>
);

export default Preview;

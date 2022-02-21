import React from 'react';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1>Card Preview</h1>
    {cards.map((card) => card.id)}
  </section>
);

export default Preview;

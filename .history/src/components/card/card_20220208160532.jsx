import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    card;
  return <h1>{id}</h1>;
};
export default Card;

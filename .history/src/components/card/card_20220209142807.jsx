import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const DEFAULT_IMAGE = '/images/default_logo.png';
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li>
      <img src={url} alt='profile_photo' />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>{message}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </li>
  );
};
export default Card;

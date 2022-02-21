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
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
        <p>{title}</p>
      </div>
    </li>
  );
};
export default Card;

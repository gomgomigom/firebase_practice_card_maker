import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    card;
  return( 
  <li>
  <h1>{name}</h1>
  <p>{company}</p>
  </li>;
  
  )
};
export default Card;

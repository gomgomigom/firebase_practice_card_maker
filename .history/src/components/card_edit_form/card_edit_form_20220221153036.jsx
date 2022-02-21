import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

  return <h1>{card.id}</h1>;
};

export default CardEditForm;

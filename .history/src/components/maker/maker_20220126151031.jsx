import React from 'react';
import { useLocation } from 'react-router-dom';
// import styles from './maker.module.css';

const Maker = (props) => {
  const location = useLocation();
  return <h1>{location}</h1>;
};

export default Maker;

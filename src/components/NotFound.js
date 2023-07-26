import React from 'react';
import noresults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <Asset src={noresults} message="Sorry, the page you're looking for doesn't exist"  />
    </div>
  )
}

export default NotFound
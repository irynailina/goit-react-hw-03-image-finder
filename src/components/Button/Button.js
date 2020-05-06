import React from 'react';
import styles from './button.module.css'

const Button = ({loadMoreBtn}) => (
    <button onClick={loadMoreBtn} className={styles.Button}>Load more</button>
);

export default Button;
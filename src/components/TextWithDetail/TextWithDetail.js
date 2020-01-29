import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextWithDetail.module.css';

const TextWithDetail = ({ text, detail }) => (
    <div className={styles.container}>
        <div className={styles.text} >{text}</div>
        <div  className={styles.detail} >{detail}</div>
    </div>
);
TextWithDetail.propType = {
    text: PropTypes.string.isRequired,
    detail: PropTypes.string
};


export default TextWithDetail
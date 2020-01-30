import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThoughtsModal.module.css';

const ThoughtsModal = ({ text, detail }) => (
    <div className={styles.container}>
       THOUGHTS
    </div>
);
ThoughtsModal.propType = {
    text: PropTypes.string.isRequired,
    detail: PropTypes.string
};

export default ThoughtsModal;

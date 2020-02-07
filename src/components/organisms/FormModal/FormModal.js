import React from 'react';
import styles from './FormModal.module.scss';

const FormModal = () => (
    <div className={styles.container}>
        ADD ITEMS
       <div>
           <input placeholder="add items" ></input>
       </div>
    </div>
);

export default FormModal;

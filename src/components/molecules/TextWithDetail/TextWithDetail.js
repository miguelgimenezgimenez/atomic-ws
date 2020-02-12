import React from 'react';

import styles from './TextWithDetail.module.scss';
import Text from '~atoms/Text';
import Detail from '~atoms/Detail';

const TextWithDetail = ({ text, detail }) => (
    <div className={styles.container}>
        <Text text={text} />
        <Detail detail={detail} />
    </div>
);


export default TextWithDetail;

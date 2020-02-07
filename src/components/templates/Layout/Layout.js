import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import style from './Layout.module.scss';
import Navigation from '../../organisms/Navigation';

export default function Layout({ children, header, footer }) {
   
    return (
        <div>
            <div className={style.header}>{header}</div>
            <div>{children}</div>
            <div className={style.footer}>{footer}</div>
        </div>
    );
}

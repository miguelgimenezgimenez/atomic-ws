import React, { useEffect } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Sad, AccountCircleIcon } from './assets/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import style from './Layout.module.scss';

export default function Layout({ children }) {
    const [ value, setValue ] = React.useState('HOME');
    const history = useHistory();
    const title = history.location.pathname.slice(1).toUpperCase();
    useEffect(
        () => {
            if (!title.length) {
                setValue('HOME');
            } else {
                setValue(title);
            }
        },
        [ title ]
    );
    return (
        <div>
            <div className={style.title}>{title}</div>
            <div>{children}</div>
            <div className={style.layout}>
                <BottomNavigation value={value}>
                    <BottomNavigationAction
                        component={Link}
                        to="/home"
                        label="HOME"
                        value="HOME"
                        icon={<AccountCircleIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="thoughts"
                        label="THOUGHTS"
                        value="THOUGHTS"
                        icon={<Sad />}
                    />
                </BottomNavigation>
            </div>
        </div>
    );
}

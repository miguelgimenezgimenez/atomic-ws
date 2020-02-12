import React, { useEffect } from 'react';

import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { Sad, AccountCircleIcon } from '~/assets/icons';
import { Link, useHistory } from 'react-router-dom';

export default function Navigation() {
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
        <BottomNavigation value={value}>
            <BottomNavigationAction
                component={Link}
                to="/home"
                label="HOME"
                value="HOME"
                icon={<AccountCircleIcon />}
            />
            <BottomNavigationAction component={Link} to="items" label="THOUGHTS" value="THOUGHTS" icon={<Sad />} />
        </BottomNavigation>
    );
}

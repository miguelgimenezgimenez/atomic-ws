import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import style from './Layout.module.css';

export default function LabelBottomNavigation({ children }) {
    const [ value, setValue ] = React.useState('recents');
    const history = useHistory();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const title = history.location.pathname.slice(1).toUpperCase();
    return (
        <div>
            <div className={style.title}>{title}</div>
            <div>{children}</div>
            <div className={style.layout}>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        component={Link}
                        to="thoughts"
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="thoughts"
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="thoughts"
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="thoughts"
                        label="Folder"
                        value="folder"
                        icon={<FolderIcon />}
                    />
                </BottomNavigation>
            </div>
        </div>
    );
}

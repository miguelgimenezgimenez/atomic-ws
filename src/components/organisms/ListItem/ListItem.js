import React from 'react';
import { Icon } from '@material-ui/core';
import TextWithDetail from '~molecules/TextWithDetail';
import style from './ListItem.module.scss';
import { useHistory } from 'react-router-dom';

function ListItem({ text, detail, icon, id }) {
    const history = useHistory();

    const goToItem = () => {
        history.push(`items/${id}`);
    };
    return (
        <div onClick={goToItem} className={style.container}>
            <Icon component={icon} />
            <TextWithDetail text={text} detail={detail} />
        </div>
    );
}
export default ListItem;

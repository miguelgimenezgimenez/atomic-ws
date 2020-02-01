import React from 'react';
import Icon from '@material-ui/core/Icon';
import TextWithDetail from '../TextWithDetail';
import style from './ThoughstList.module.scss';
import { useHistory } from 'react-router-dom';

function ThoughtListItem({ text, detail, icon, id }) {
    const history = useHistory();

    const goToThought = () => {
        history.push(`thoughts/${id}`);
    };
    return (
        <div onClick={goToThought} className={style.container}>
            <Icon component={icon} />
            <TextWithDetail text={text} detail={detail} />
        </div>
    );
}
export default ThoughtListItem;

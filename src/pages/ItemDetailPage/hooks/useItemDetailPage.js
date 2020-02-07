import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currentItemSelector } from '~/reducers/items';
import { setCurrentItem } from '~/actions/items';

export default (itemId) => {
    const dispatch = useDispatch();
    const currentItem = useSelector(currentItemSelector);
    useEffect(
        () => {
            dispatch(setCurrentItem(itemId));
        },
        [ itemId ]
    );
    return { currentItem };
};

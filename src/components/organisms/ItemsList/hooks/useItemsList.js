
import { useSelector } from 'react-redux';

import { itemsSelector } from '~/reducers/items';

export default () => {
    // const dispatch = useDispatch();
    const items = useSelector(itemsSelector);
    return { items };
};


import { useSelector } from 'react-redux';

import { thoughtsSelector } from '../../../reducers/thoughts';

export default () => {
    // const dispatch = useDispatch();
    const thoughts = useSelector(thoughtsSelector);
    return { thoughts };
};

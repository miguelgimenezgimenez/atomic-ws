import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currentThoughtSelector } from '../../../reducers/thoughts';
import { setCurrentThought } from '../../../actions/thoughts';

export default (thoughtId) => {
    const dispatch = useDispatch();
    const currentThought = useSelector(currentThoughtSelector);
    useEffect(
        () => {
            dispatch(setCurrentThought(thoughtId));
        },
        [ thoughtId ]
    );
    return { currentThought };
};

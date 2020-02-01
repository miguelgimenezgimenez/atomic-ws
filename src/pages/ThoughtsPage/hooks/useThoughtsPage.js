import { useDispatch } from 'react-redux';
import { THOUGHTS_MODAL } from '~/constants';
import { toggleModal } from '~/actions/ui';

export default (thoughtId) => {
    const dispatch = useDispatch();

    const addThought = () => {
        dispatch(toggleModal(true, THOUGHTS_MODAL));
    };
    return { addThought };
};

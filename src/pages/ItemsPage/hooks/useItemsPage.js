import { useDispatch } from 'react-redux';
import { FORM_MODAL } from '~/constants';
import { toggleModal } from '~/actions/ui';

export default (itemId) => {
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(toggleModal(true, FORM_MODAL));
    };
    return { addItem };
};

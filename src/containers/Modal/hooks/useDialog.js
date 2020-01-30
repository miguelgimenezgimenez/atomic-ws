import { modalSelector,modalComponentSelector } from '../../../reducers/ui';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../../actions/ui';

export default () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector(modalSelector);
    const modalComponent = useSelector(modalComponentSelector);
    const handleClose = () => dispatch(toggleModal(false));

    return { modalOpen, handleClose, modalComponent };
};

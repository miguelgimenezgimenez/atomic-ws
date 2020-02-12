import React from 'react';
import { Dialog } from '@material-ui/core';
import useModal from './hooks/useModal';
import FormModal from '~organisms/FormModal';
import { FORM_MODAL } from '~/constants';

const modals = {
    [FORM_MODAL]: FormModal
};

function Modal() {
    const { handleClose, modalOpen, modalComponent } = useModal();
    const CurrentModal = modals[modalComponent];

    return (
        <Dialog onClose={handleClose} open={modalOpen}>
            <div>{CurrentModal ? <CurrentModal /> : null}</div>
        </Dialog>
    );
}
export default Modal;

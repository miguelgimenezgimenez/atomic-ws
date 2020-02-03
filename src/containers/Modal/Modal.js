import React from 'react';
import MaterialDialog from '@material-ui/core/Dialog';
import useModal from './hooks/useModal';
import ThoughtsModal from './ThoughtsModal';
import { THOUGHTS_MODAL } from '~/constants';

const modals = {
    [THOUGHTS_MODAL]: ThoughtsModal
};

function Modal() {
    const { handleClose, modalOpen, modalComponent } = useModal();
    const CurrentModal = modals[modalComponent];

    return (
        <MaterialDialog onClose={handleClose} open={modalOpen}>
            <div>
            { CurrentModal? <CurrentModal />:null}
            </div>
        </MaterialDialog>
    );
}
export default Modal;

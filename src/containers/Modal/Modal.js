import React from 'react';
import MaterialDialog from '@material-ui/core/Dialog';
import useDialog from './hooks/useDialog';
import ThoughtsModal from '@/ThoughtsModal';
import { THOUGHTS_MODAL } from '~/constants/index';

const modals = {
    [THOUGHTS_MODAL]: ThoughtsModal
};

function Modal() {
    const { handleClose, modalOpen, modalComponent } = useDialog();
    const CurrentModal = modals[modalComponent];
    console.log(modalComponent)
    console.log(CurrentModal)
    return (
        <MaterialDialog onClose={handleClose} open={modalOpen}>
            <div>
            { CurrentModal? <CurrentModal />:null}
            </div>
        </MaterialDialog>
    );
}
export default Modal;

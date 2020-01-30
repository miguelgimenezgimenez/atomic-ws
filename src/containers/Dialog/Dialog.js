import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import MaterialDialog from '@material-ui/core/Dialog';
import useDialog from './hooks/useDialog'

function Dialog(props) {
    const { handleClose, open,modalComponent } = useDialog();

    return (
        <MaterialDialog onClose={handleClose} open={open}>
            {()=>modalComponent}
        </MaterialDialog>
    );
}
export default Dialog
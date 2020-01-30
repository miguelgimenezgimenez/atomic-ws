import { TOGGLE_MODAL } from '../constants';

export const toggleModal = (modalOpen, modalComponent) => ({ type: TOGGLE_MODAL, modalOpen, modalComponent });


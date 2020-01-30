import { TOGGLE_MODAL } from '../constants';

const INITIAL_STATE = {
    modalOpen: false,
    modalComponent: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                modalOpen: action.modalOpen,
                modalComponent: action.modalComponent
            };

        default:
            return state;
    }
};

export const modalSelector = (state) => state.ui.modalOpen;

export const modalComponentSelector = (state) => state.ui.modalComponent;

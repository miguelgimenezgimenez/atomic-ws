import { TOGGLE_MODAL } from '../constants';

const INITIAL_STATE = {
  modalOpen:false
}

export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case TOGGLE_MODAL:
      
      return {...state, modalOpen:true}
  
    default:
     return state
  }
}

export const modalSelector = state=>state.ui.modalOpen
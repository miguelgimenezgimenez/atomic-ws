import { SET_ITEM } from '../constants';

export const setCurrentItem=(itemId)=>({
  type:SET_ITEM,
  itemId
})
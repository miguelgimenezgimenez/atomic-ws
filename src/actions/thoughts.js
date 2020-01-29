import { SET_CURRENT_THOUGHT } from '../constants';

export const setCurrentThought=(thoughtId)=>({
  type:SET_CURRENT_THOUGHT,
  thoughtId
})
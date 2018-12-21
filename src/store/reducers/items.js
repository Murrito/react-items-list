import {
  ADD_TO_TOP,
  ADD_TO_END,
  DELETE_FIRST,
  DELETE_LAST,
} from '../constants/actionTypes';
import items from '../constants/items';

const initialState = {
  items,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_TOP:
      return {
        ...state,
        items: state.items[state.items.length - 1] ? [
          state.items[state.items.length - 1],
          ...state.items,
        ] : state.items,
      };
    case ADD_TO_END:
      return {
        ...state,
        items: action.item || state.items[0] ? [
          ...state.items,
          action.item || state.items[0] || undefined,
        ] : state.items,
      };
    case DELETE_FIRST:
      return {
        ...state,
        items: state.items.slice(1),
      };
    case DELETE_LAST:
      return {
        ...state,
        items: state.items.slice(0, state.items.length - 1),
      };
    default:
      return state;
  }
};

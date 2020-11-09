import {FIRST_CASE_ONE, UNDO, REDO, ERROR, UNDO_FIRST} from "../Actions/types";
 import {firstClick} from "../Fucntionalities/FirstCase"
const initialState = {
  first: 1,
};

const FirstReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FIRST_CASE_ONE:
      return {
        ...state,
        first: firstClick(state.first)
      };
    case UNDO_FIRST:
      return {
        ...state,
      };
    case REDO:
      return {
        ...state,
      };
    case ERROR:
      return {
        ...state,
        err: payload,
      };
    default:
      return state;
  }
};

export default FirstReducer;

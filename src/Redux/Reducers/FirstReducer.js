import {FIRST_CASE_ONE, UNDO, REDO, ERROR} from "../Actions/types";

const initialState = {
  first: "First-1",
};

const FirstReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FIRST_CASE_ONE:
      return {
        ...state,
        first: payload
      };
    case UNDO:
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

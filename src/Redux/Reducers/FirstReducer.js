import {FIRST_CASE_ONE, UNDO, REDO, ERROR, UNDO_FIRST ,FIRST_TARGET} from "../Actions/types";
import {firstClick , getRandomColor} from "../Fucntionalities/FirstCase"
const initialState = {
  first: 1,
  target:"",
};

const FirstReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FIRST_CASE_ONE:
      console.log("FIRST_CASE_ONE")
      return {
        ...state,
        first: firstClick(state.first)
      };
    case FIRST_TARGET:
      return {
        ...state,
        target: payload.style.color=getRandomColor(),
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

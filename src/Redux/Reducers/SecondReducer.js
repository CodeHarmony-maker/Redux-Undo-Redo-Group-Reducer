import {SECOND_CASE_ONE, UNDO, REDO, ERROR} from "../Actions/types";
import {firstClick} from "../Fucntionalities/FirstCase"

const initialState = {
  second: 2,
};

const SecondReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SECOND_CASE_ONE:
      return {
        ...state,
        second:  firstClick(state.second)
        ,
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
export default SecondReducer;

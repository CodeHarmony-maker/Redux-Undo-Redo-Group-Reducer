import {THIRD_CASE_ONE, ERROR} from "../Actions/types";

const initialState = {
  third: "Third-1",
};

const ThirdReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case THIRD_CASE_ONE:
      return {
        ...state,
        third: payload,
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

export default ThirdReducer;

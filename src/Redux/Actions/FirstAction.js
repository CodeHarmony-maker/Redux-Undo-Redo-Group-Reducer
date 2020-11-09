import {FIRST_CASE_ONE,FIRST_TARGET} from "./types";

export const first_case_one = (value) => (dispatch) => {
  dispatch({
    type: FIRST_CASE_ONE,
    payload: value
  });
};
export const first_target = (value) => (dispatch) => {
  dispatch({
    type: FIRST_TARGET,
    payload: value
  });
};

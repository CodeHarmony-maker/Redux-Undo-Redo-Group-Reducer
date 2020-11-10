import {FIRST_CASE_ONE, FIRST_TARGET, CHANGE_APP_BACKGROUND} from "./types";

export const first_case_one = (value) => (dispatch) => {
  dispatch({
    type: FIRST_CASE_ONE,
    payload: value,
  });
};
export const first_target = (value) => (dispatch) => {
  dispatch({
    type: FIRST_TARGET,
    payload: value,
  });
};

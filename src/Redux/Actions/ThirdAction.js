import {THIRD_CASE_ONE} from "./types";

export const third_case_one = (value) => (dispatch) => {
  dispatch({
    type: THIRD_CASE_ONE,
    payload: value
  });
};

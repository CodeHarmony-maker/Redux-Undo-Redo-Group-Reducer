import {FIRST_CASE_ONE} from "./types";

export const first_case_one = (value) => (dispatch) => {
  dispatch({
    type: FIRST_CASE_ONE,
    payload: value
  });
};

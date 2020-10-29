import {SECOND_CASE_ONE} from "./types";

export const second_case_one = (value) => (dispatch) => {
  dispatch({
    type: SECOND_CASE_ONE,
    payload: value
  });
};

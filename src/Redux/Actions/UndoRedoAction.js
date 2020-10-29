import {UNDO, REDO, ERROR} from "./types";
import {ActionCreators as UndoActionCreators} from "redux-undo";

export const onUndo = () => async (dispatch) => {
  try {
    dispatch(UndoActionCreators.undo());
    dispatch({
      type: UNDO,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: {
        msg: "Ooops! Some thing went wrong onUndo!" || err.response.statusText,
      },
    });
  }
};

export const onRedo = () => async (dispatch) => {
  try {
    dispatch(UndoActionCreators.redo());
    dispatch({
      type: REDO,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: {
        msg: "Ooops! Some thing went wrong onRedo!" || err.response.statusText,
      },
    });
  }
};

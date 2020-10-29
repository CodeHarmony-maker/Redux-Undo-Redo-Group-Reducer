import {combineReducers} from "redux";
import undoable, {
  includeAction,
  distinctState,
  combineFilters,
} from "redux-undo";

import FirstReducer from "./FirstReducer";
import SecondReducer from "./SecondReducer";
import ThirdReducer from "./ThirdReducer";

const rootReducer = combineReducers({
  undoGroup: undoable(
    combineReducers({
      FirstReducer,
      SecondReducer,
    })
  ),
  ThirdReducer,
});

export default rootReducer;

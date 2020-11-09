import "./App.css";
import UndoRedo from "./UndoRedo";
import {connect, useDispatch, useSelector} from "react-redux";
import {first_case_one, first_target} from "./Redux/Actions/FirstAction";
import {second_case_one} from "./Redux/Actions/SecondAction";
import {third_case_one} from "./Redux/Actions/ThirdAction";
import {Button} from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const UndoGroupState = useSelector((state) => state.undoGroup);
  const ThirdReducer = useSelector((state) => state.ThirdReducer);
  console.log("UndoGroupState", UndoGroupState);
  return (
    <div className="App">
      <h1>UNDO GROUP</h1>
      <UndoRedo />
      <h3 style={{color: "red"}}
        onClick={(e) => {
          dispatch(first_target(e.target));
        }}
      >
        {UndoGroupState.present.FirstReducer.first}
      </h3>
      <h3>{UndoGroupState.present.SecondReducer.second}</h3>
      <h3>{ThirdReducer.third}</h3>
      <Button
        onClick={(e) => {
          dispatch(first_case_one(e.target));
        }}
      >
        1
      </Button>
      <Button
        onClick={(e) => {
          dispatch(second_case_one(e.target));
        }}
      >
        2
      </Button>
      <Button
        onClick={(e) => {
          dispatch(third_case_one(e.target));
        }}
      >
        3
      </Button>
    </div>
  );
}

export default connect(null, {
  first_case_one,
  second_case_one,
  third_case_one,
  first_target,
})(App);

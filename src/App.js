import "./App.css";
import UndoRedo from "./UndoRedo";
import {connect, useDispatch, useSelector} from "react-redux";
import {first_case_one} from "./Redux/Actions/FirstAction";
import {second_case_one} from "./Redux/Actions/SecondAction";
import {third_case_one} from "./Redux/Actions/ThirdAction";
import {Button} from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const UndoGroupState = useSelector((state) => state.undoGroup);
  const ThirdReducer = useSelector((state) => state.ThirdReducer);
  console.log("UndoGroupState",UndoGroupState)
  return (
    <div className="App">
      <h1>UNDO GROUP</h1>
      <UndoRedo />
      <h3>{UndoGroupState.present.FirstReducer.first}</h3>
      <h3>{UndoGroupState.present.SecondReducer.second}</h3>
      <h3>{ThirdReducer.third}</h3>
      <Button onClick={()=>{dispatch(first_case_one())}}>1</Button>
      <Button onClick={()=>{dispatch(second_case_one())}}>2</Button>
      <Button onClick={()=>{dispatch(third_case_one())}}>3</Button>
    </div>
  );
}

export default connect(null, {first_case_one, second_case_one, third_case_one})(
  App
);

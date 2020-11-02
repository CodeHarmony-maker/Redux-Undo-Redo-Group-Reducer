import React from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import {onUndo, onRedo} from "./Redux/Actions/UndoRedoAction";

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
  <div style={{display: "inline-block"}} className="inner-gb-right">
    <Button
      variant="light"
      className="br0"
      onClick={() => {
        onUndo();
      }}
      disabled={!canUndo}
    >
      Undo
    </Button>
    <Button
      className="br0"
      variant="light"
      onClick={() => {
        onRedo();
      }}
      disabled={!canRedo}
    >
      Redo
    </Button>
  </div>
);

const mapStateToProps = (state) => {
  console.log("state",state)
  return {
    canUndo: state.undoGroup.past.length > 0,
    canRedo: state.undoGroup.future.length > 0,
  };
};

// const mapDispatchToProps = ({
//   onUndo: UndoActionCreators.undo,
//   onRedo: UndoActionCreators.redo
// })

UndoRedo = connect(
  mapStateToProps,
  {onUndo,onRedo}
)(UndoRedo)

export default UndoRedo

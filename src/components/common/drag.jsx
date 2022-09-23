import React, { Component } from "react";
import { Draggable } from "react-drag-reorder";
import { FaAppStore } from "react-icons/fa";

class Drag extends Component {
  state = {
    words: ["Hello", "Hi", "How are you", "Cool"],
  };

  getChangedPos = (currentPos, newPos) => {
    console.log(currentPos, newPos);
  };

  render() {
    return (
      <Draggable onPosChange={this.getChangedPos}>
        {this.state.words.map((word, idx) => {
          return <div>{word}</div>;
        })}
      </Draggable>
    );
  }
}

export default Drag;

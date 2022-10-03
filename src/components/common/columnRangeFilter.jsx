import React, { Component } from "react";
import { FiFilter } from "react-icons/fi";
import Popup from "reactjs-popup";
import ApplyButton from "./applyButton";
import ResetButton from "./resetButton";
import RangeSlider from "react-range-slider-input";

class ColumnRangeFilter extends Component {
  state = { path: null, min: 0, max: 1, selectedMin: 0, selectedMax: 1 };

  componentDidUpdate() {
    if (
      this.props.column.min !== this.state.min ||
      this.props.column.max !== this.state.max
    ) {
      const min = this.props.column.min;
      const max = this.props.column.max;
      const selectedMin = min;
      const selectedMax = max;
      const path = this.props.column.path;
      this.setState({
        selectedMin,
        selectedMax,
        min,
        max,
        path,
      });
    }
  }

  handelFilter = () => {
    this.props.updateFilterParameter({
      [this.state.path]: {
        min: this.state.selectedMin,
        max: this.state.selectedMax,
      },
    });
  };

  handelReset = () => {
    const selectedMin = this.state.min;
    const selectedMax = this.state.max;
    this.setState({ selectedMin, selectedMax });
    this.props.resetFilterParameter(this.state.path);
  };

  handelInput(input) {
    const selectedMin = input[0];
    const selectedMax = input[1];
    this.setState({ selectedMin, selectedMax });
  }

  render() {
    return (
      <div>
        <Popup
          trigger={
            <button>
              <FiFilter />
            </button>
          }
          position="bottom left"
        >
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div>
              <RangeSlider
                className="my-4"
                min={this.state.min}
                max={this.state.max}
                onInput={this.handelInput.bind(this)}
                value={[this.state.selectedMin, this.state.selectedMax]}
                step={this.props.column.step?this.props.column.step:1}
              />

              <div className="flex justify-between">
                <p>{this.state.selectedMin.toLocaleString()}</p>
                <p>{this.state.selectedMax.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <ResetButton onClick={this.handelReset} />
              <ApplyButton
                onClick={this.handelFilter}
                className={"m-2"}
                label={"Apply"}
              />
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default ColumnRangeFilter;

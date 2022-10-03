import React, { Component } from "react";
import { FiFilter } from "react-icons/fi";
import Popup from "reactjs-popup";
import ApplyButton from "./applyButton";
import ResetButton from "./resetButton";
import DatePicker from "react-datepicker";

class ColumnDateFilter extends Component {
  state = { path: null, startDate: null, endDate: null };

  componentDidMount() {
    const path = this.props.column.path;
    this.setState({ path });
  }

  handelFilter = () => {
    if ((this.state.startDate !== null) & (this.state.endDate !== null)) {
      this.props.updateFilterParameter({
        [this.state.path]: {
          startDate: this.state.startDate,
          endDate: this.state.endDate,
        },
      });
    }
  };

  handelReset = () => {
    this.setState({ startDate: null, endDate: null });
    this.props.resetFilterParameter(this.state.path);
  };

  handelDateChange = (update) => {
    const [startDate, endDate] = update;
    this.setState({ startDate, endDate });
    if ((startDate !== null) & (endDate !== null)) {
    }
  };

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
            <div className="m-2 mb-5">
              <DatePicker
                selectsRange={true}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={(update) => {
                  this.handelDateChange(update);
                }}
                inline
              />
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

export default ColumnDateFilter;

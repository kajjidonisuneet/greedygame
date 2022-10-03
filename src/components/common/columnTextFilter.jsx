import React, { Component } from "react";
import { FiFilter } from "react-icons/fi";
import Popup from "reactjs-popup";
import ApplyButton from "./applyButton";
import ResetButton from "./resetButton";

class ColumnTextFilter extends Component {
  state = { path: null, searchText: "" };

  componentDidMount() {
    const path = this.props.column.path;
    this.setState({ path });
  }

  handelFilter = () => {
    this.props.updateFilterParameter({
      [this.state.path]: { searchText: this.state.searchText },
    });
  };

  handelReset = () => {
    this.setState({ searchText: "" });
    this.props.resetFilterParameter(this.state.path);
  };

  handleChange(e) {

    this.setState({ searchText: e.target.value });
    
  }

  handelKeyPress(e){
    if(e.key === 'Enter'){
      this.handelFilter()
    }
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
            <div className="m-2 mb-5">
              <input
                type="text"
                value={this.state.searchText}
                onChange={this.handleChange.bind(this)}
                className=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onKeyPress={this.handelKeyPress.bind(this)}
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

export default ColumnTextFilter;

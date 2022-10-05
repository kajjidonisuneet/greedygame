import React, { Component } from "react";
import ApplyButton from "../common/applyButton";
import CloseButton from "../common/closeButton";
import SettingCheckBox from "../common/settingCheckbox";
import { Draggable } from "react-drag-reorder";

class SettingBox extends Component {
  state = { columns: [] };

  constructor(props) {
    super(props);
    this.state.columns = props.columns;
  }

  handelChange(event) {
    const { columns } = this.state;
    if (!(event.target.value === "date" || event.target.value === "app_name")) {
      const index = columns.findIndex(
        (item) => item.path === event.target.value
      );
      columns[index].displayCellContent = !columns[index].displayCellContent;
      this.setState(columns);
    }
  }

  updateColumns() {
    this.props.updateColumns(this.state.columns);
  }

  getChangedPos = (currentPos, newPos) => {
    const { columns } = this.state;
    if (currentPos !== newPos) {
      const element = columns[currentPos];
      columns.splice(currentPos, 1);
      columns.splice(newPos, 0, element);
    }
    this.setState({ columns });
  };

  render() {
    return (
      <div className="p-6  bg-white rounded-lg border border-gray-200 shadow-md m-5">
        <p className="m-2 text-xl font-medium">Dimensions and Metrics</p>
        <div className="flex mb-5 flex-wrap ">
          <Draggable onPosChange={this.getChangedPos}>
            {this.state.columns.map((item, index) => {
              return (
                <SettingCheckBox
                  value={item.path}
                  onChange={this.handelChange.bind(this)}
                  label={item.label}
                  checked={item.displayCellContent}
                  key={index}
                />
              );
            })}
          </Draggable>
        </div>

        <div className="flex justify-end">
          <CloseButton onClick={this.props.onClick} />
          <ApplyButton
            onClick={this.updateColumns.bind(this)}
            className={"m-2"}
            label={'Apply Changes'}
          />
        </div>
      </div>
    );
  }
}
//add on click to apply button
export default SettingBox;

{
  /* <SettingCheckBox
  value={item.path}
  onChange={this.handelChange.bind(this)}
  label={item.label}
  checked={item.displayCellContent}
  key={index}
/>; */
}

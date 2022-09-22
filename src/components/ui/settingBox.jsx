import React, { Component } from "react";
import ApplyButton from "../common/applyButton";
import CloseButton from "../common/closeButton";
import SettingCheckBox from "../common/settingCheckbox";

class SettingBox extends Component {
  state = { columns: [] };

  componentDidMount() {
    const columns = this.props.columns;
    this.setState({ columns });
  }

  handelChange(event) {
    const {columns} = this.state
    if (!(event.target.value==='date' || event.target.value==='app_name')){ 
    const index = columns.findIndex((item) =>(item.path === event.target.value))
    columns[index].displayCellContent = !columns[index].displayCellContent
    this.setState(columns)}
  }

  updateColumns(){
    this.props.updateColumns(this.state.columns)
  }


  render() {
    return (
      <div className="p-6  bg-white rounded-lg border border-gray-200 shadow-md m-5">
        <div >
          {this.state.columns.map((item, index) => {
            return(<SettingCheckBox
              value={item.path}
              onChange={this.handelChange.bind(this)}
              label={item.label}
              checked={item.displayCellContent}
              key={index}
            />);
          })}
        </div>

        <div className="flex justify-end">
          <CloseButton onClick={this.props.onClick} />
          <ApplyButton onClick={this.updateColumns.bind(this)} className={'m-2'}/>
        </div>
      </div>
    );
  }
}
//add on click to apply button
export default SettingBox;
import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => {
            if (column.displayCellContent){
            return(<th key={column.path}>{column.label}</th>);
            }
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
import React, { Component } from "react";
import TableHeadCell from "./tableHeadCell";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => {
            if (column.displayCellContent){
            return(<TableHeadCell key={column.path}>{column.headerComponents?column.headerComponents(column):<p>nill</p>}</TableHeadCell>);
            }
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

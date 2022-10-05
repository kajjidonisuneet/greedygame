import React, { Component } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

class TableHeaderLabel extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon(column) {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <FaSortUp color={"gray"} />;
    return <FaSortDown color={"gray"} />;
  }

  render() {
    return (
      <div
        className="flex justify-center items-center hover:cursor-pointer"
        onClick={() => this.raiseSort(this.props.column.path)}
      >
        {this.renderSortIcon(this.props.column)}
        <p className="text-lg mx-2 font-medium text-gray-700">
          {this.props.column.label}
        </p>
      </div>
    );
  }
}

export default TableHeaderLabel;

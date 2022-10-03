import React from "react";
const TableHeaderLabel = ({column}) => {
  return <p className="text-xl m-4">{column.label}</p>;
};

export default TableHeaderLabel;

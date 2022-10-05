import React from "react";
import numeral from "numeral";

const TableHeaderTotal = ({ column, format }) => {
  return (
    <p className=" text-3xl font-normal mt-3">
      {numeral(column.total).format(format)}
    </p>
  );
};

export default TableHeaderTotal;
{
}

import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, index) => {
              if (column.displayCellContent) {
                return (
                  <td key={index} className=" border-b border-gray-300 text-right">
                    <div className="my-2 mx-10">
                      {column.cellContent
                        ? column.cellContent(item)
                        : item[column.path]}
                    </div>
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

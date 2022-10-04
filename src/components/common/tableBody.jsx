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
                  <td key={index}>
                    <p className="m-2">
                      {column.cellContent
                        ? column.cellContent(item)
                        : item[column.path]}
                    </p>
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

import React, { Component } from "react";
import Table from "../common/table";


class AnalyticsTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <Table data={data} columns={this.props.columns} />
      </>
    );
  }
}

export default AnalyticsTable;

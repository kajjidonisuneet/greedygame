import React, { Component } from "react";
import Table from "../common/table";

class AnalyticsTable extends Component {
  state = {
    columns: [
      { path: "date", label: "Date" },
      { path: "app_id", label: "App" },
      { path: "requests", label: "Requests" },
      { path: "responses", label: "Responses" },
      { path: "impressions", label: "Impressions" },
      { path: "clicks", label: "Clicks" },
      { path: "revenue", label: "Revenue" },
    ],
  };
  render() {
    const { data } = this.props;
    return <><Table data={data} columns={this.state.columns}/></>;
  }
}

export default AnalyticsTable;

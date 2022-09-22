import React, { Component } from "react";
import Table from "../common/table";
import { FaAppStore } from "react-icons/fa";

class AnalyticsTable extends Component {
  state = {
    columns: [
      {
        path: "date",
        label: "Date",
        cellContent: (item) => {
          const date = new Date(item.date);
          return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        },
      },
      {
        path: "app_name",
        label: "App",
        cellContent: (item) => {
          return (
            <div className="flex">
              <FaAppStore /> {item.app_name}
            </div>
          );
        },
      },
      {
        path: "requests",
        label: "Requests",
        cellContent: (item) => {
          return item.requests.toLocaleString();
        },
      },
      {
        path: "responses",
        label: "Responses",
        cellContent: (item) => {
          return item.responses.toLocaleString();
        },
      },
      { path: "impressions", label: "Impressions" },
      { path: "clicks", label: "Clicks" },
      {
        path: "revenue",
        label: "Revenue",
        cellContent: (item) => {
          return `$${item.revenue.toFixed(2)}`;
        },
      },
      {
        path: "fill_rate",
        label: "Fill Rate",
        cellContent: (item) => {
          return `${item.fill_rate.toFixed(2)}%`;
        },
      },
      {
        path: "CTR",
        label: "CTR",
        cellContent: (item) => {
          return `${item.CTR.toFixed(2)}%`;
        },
      },
    ],
  };

  getAppName = () => {};

  render() {
    const { data } = this.props;
    return (
      <>
        <Table data={data} columns={this.state.columns} />
      </>
    );
  }
}

export default AnalyticsTable;

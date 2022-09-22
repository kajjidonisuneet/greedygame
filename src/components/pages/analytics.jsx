import React, { Component } from "react";
import AnalyticsTable from "../ui/analyticsTable";
import DateRange from "../common/dateRange";
import { getAppNames, getReport } from "../../service/greedyGameService";
import SettingButton from "../common/settingButton";
import SettingBox from "../ui/settingBox";
import { FaAppStore } from "react-icons/fa";

class Analytics extends Component {
  state = {
    startDate: null,
    endDate: null,
    reports: [],
    appName: {},
    displaySettings: false,
    columns: [
      {
        path: "date",
        label: "Date",
        displayCellContent:true,
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
        displayCellContent:true,
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
        displayCellContent:true,
        cellContent: (item) => {
          return item.requests.toLocaleString();
        },
      },
      {
        path: "responses",
        label: "Responses",
        displayCellContent:true,
        cellContent: (item) => {
          return item.responses.toLocaleString();
        },
      },
      { path: "impressions", label: "Impressions", displayCellContent:true, },
      { path: "clicks", label: "Clicks", displayCellContent:true, },
      {
        path: "revenue",
        label: "Revenue",
        displayCellContent:true,
        cellContent: (item) => {
          return `$${item.revenue.toFixed(2)}`;
        },
      },
      {
        path: "fill_rate",
        label: "Fill Rate",
        displayCellContent:true,
        cellContent: (item) => {
          return `${item.fill_rate.toFixed(2)}%`;
        },
      },
      {
        path: "CTR",
        label: "CTR",
        displayCellContent:true,
        cellContent: (item) => {
          return `${item.CTR.toFixed(2)}%`;
        },
      },
    ],
  };

  calculateFillRate(item) {
    return (item.requests / item.responses) * 100;
  }

  calculateCTR(item) {
    return (item.clicks / item.impressions) * 100;
  }

  updateReports(r) {
    const reports = [];
    r.forEach((item) => {
      item.app_name = this.state.appName[item.app_id];
      item.fill_rate = this.calculateFillRate(item);
      item.CTR = this.calculateCTR(item);
      reports.push(item);
    });
    this.setState({ reports });
  }

  updateDateChange = async (startDate, endDate) => {
    this.setState({ startDate, endDate }); // if dates are not required for any other things then remove it from storing it in state
    const reports = await getReport(startDate, endDate);
    this.updateReports(reports);
  };

  async componentDidMount() {
    const appName = await getAppNames();
    this.setState({ appName });
  }

  toggleDisplaySetting() {
    const displaySettings = !this.state.displaySettings;
    this.setState({ displaySettings });
  }

  updateColumns(columns){
    this.setState({columns})
  }

  render() {
    return (
      <>
        <div className="flex">
          <DateRange onDateChange={this.updateDateChange} />
          <div className="ml-auto">
            <SettingButton onClick={this.toggleDisplaySetting.bind(this)} />
          </div>
        </div>
        <div>
          {this.state.displaySettings && (
            <SettingBox onClick={this.toggleDisplaySetting.bind(this)} columns={this.state.columns} updateColumns={this.updateColumns.bind(this)}/>
          )}
        </div>
        <br />
        <AnalyticsTable
          data={this.state.reports}
          columns={this.state.columns}
        />
      </>
    );
  }
}

export default Analytics;

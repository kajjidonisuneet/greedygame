import React, { Component } from "react";
import AnalyticsTable from "../ui/analyticsTable";
import DateRange from "../common/dateRange";
import { getAppNames, getReport } from "../../service/greedyGameService";
import SettingButton from "../common/settingButton";

class Analytics extends Component {
  state = { startDate: null, endDate: null, reports: [], appName: {} };

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

  render() {
    return (
      <>
        <div className="flex">
          <DateRange onDateChange={this.updateDateChange} />
          <div className="ml-auto">
            <SettingButton />
          </div>
        </div>
        <br />
        <AnalyticsTable data={this.state.reports} />
      </>
    );
  }
}

export default Analytics;

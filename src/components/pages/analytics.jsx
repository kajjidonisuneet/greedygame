import React, { Component } from "react";
import AnalyticsTable from "../ui/analyticsTable";
import DateRange from "../common/dateRange";
import { getReport } from "../../service/greedyGameService";

class Analytics extends Component {
  state = { startDate: null, endDate: null, reports: [], appName: [] };

  updateDateChange = async (startDate, endDate) => {
    this.setState({ startDate, endDate }); // if dates are not required for any other things then remove it
    const reports = await getReport(startDate, endDate);
    this.setState({ reports });
  };

  render() {
    return (
      <>
        <DateRange onDateChange={this.updateDateChange} />
        <br />
        <AnalyticsTable data={this.state.reports}/>
      </>
    );
  }
}

export default Analytics;

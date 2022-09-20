import React, { Component } from "react";
import FilterBar from "../ui/filterBar";
import AnalyticsTable from "../ui/analyticsTable";
import DateRange from "../common/dateRange";

class Analytics extends Component {
  state = {startDate: null, endDate: null};

  updateDateChange = (startDate, endDate) => {
    this.setState({startDate, endDate})
    // now make a api call
  }

  render() {
    return (
      <>
        <FilterBar />
        <br/>
        
        <br/>
        <DateRange onDateChange={this.updateDateChange}/>
        <AnalyticsTable />
      </>
    );
  }
}

export default Analytics;

import React, { Component } from "react";
import AnalyticsTable from "../ui/analyticsTable";
import DateRange from "../common/dateRange";
import { getAppNames, getReport } from "../../service/greedyGameService";
import SettingButton from "../common/settingButton";
import SettingBox from "../ui/settingBox";
import { FaAppStore } from "react-icons/fa";
import ColumnRangeFilter from "../common/columnRangeFilter";
import TableHeaderLabel from "../common/tableHeaderLabel";
import ColumnTextFilter from "../common/columnTextFilter";
import ColumnDateFilter from "../common/columnDateFilter";
import _ from "lodash";
import NoDataToDisplay from "../common/noDataToDisplay";
import TableHeaderTotal from "../common/tableHeaderTotal";

class Analytics extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    reports: [],
    appName: {},
    displaySettings: false,
    filters: {},
    filteredReports: [],
    sortColumn: { path: "date", order: "asc" },
    columns: [
      {
        path: "date",
        label: "Date",
        dataType: "date",
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnDateFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[0] a"} />
          </>
        ),
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
        dataType: "text",
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnTextFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[0] a"} />
          </>
        ),

        cellContent: (item) => {
          return (
            <div className="flex ">
              <FaAppStore />
              <p className="ml-2">{item.app_name}</p>
            </div>
          );
        },
      },
      {
        path: "requests",
        label: "Requests",
        dataType: "number",
        min: 0,
        max: 1,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[0] a"} />
          </>
        ),
        cellContent: (item) => {
          return item.requests.toLocaleString();
        },
      },
      {
        path: "responses",
        label: "Responses",
        dataType: "number",
        min: 0,
        max: 1,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[0] a"} />
          </>
        ),
        cellContent: (item) => {
          return item.responses.toLocaleString();
        },
      },
      {
        path: "impressions",
        label: "Impressions",
        dataType: "number",
        min: 0,
        max: 1,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[0] a"} />
          </>
        ),
      },
      {
        path: "clicks",
        label: "Clicks",
        dataType: "number",
        min: 0,
        max: 1,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[0] a"} />
          </>
        ),
      },
      {
        path: "revenue",
        label: "Revenue",
        dataType: "number",
        min: 0,
        max: 1,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"($0,0)"} />
          </>
        ),
        cellContent: (item) => {
          return `$${item.revenue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
      {
        path: "fill_rate",
        label: "Fill Rate",
        dataType: "number",
        min: 0,
        max: 1,
        step: 0.01,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[00]%"} />
          </>
        ),
        cellContent: (item) => {
          return `${item.fill_rate.toFixed(2)}%`;
        },
      },
      {
        path: "CTR",
        label: "CTR",
        dataType: "number",
        min: 0,
        max: 1,
        step: 0.01,
        displayCellContent: true,
        total: 0,
        headerComponents: (column) => (
          <>
            <ColumnRangeFilter
              column={column}
              updateFilterParameter={this.updateFilterParameter.bind(this)}
              resetFilterParameter={this.resetFilterParameter.bind(this)}
            />
            <TableHeaderLabel
              column={column}
              sortColumn={this.state.sortColumn}
              onSort={this.handelSort.bind(this)}
            />
            <TableHeaderTotal column={column} format={"0.[00]%"} />
          </>
        ),
        cellContent: (item) => {
          return `${item.CTR.toFixed(2)}%`;
        },
      },
    ],
  };

  updateFilterParameter(object) {
    const filters = { ...this.state.filters, ...object };
    this.setState({ filters }, this.getFilteredReport);
  }

  resetFilterParameter(object) {
    const filters = this.state.filters;
    delete filters[object];
    this.setState({ filters }, this.getFilteredReport);
  }

  handelSort(sortColumn) {
    this.setState({ sortColumn });
  }

  calculateFillRate(item) {
    return Number(((item.responses / item.requests) * 100).toFixed(3));
  }

  calculateCTR(item) {
    return Number(((item.clicks / item.impressions) * 100).toFixed(3));
  }

  updateReports(r) {
    const reports = [];
    r.forEach((item) => {
      item.app_name = this.state.appName[item.app_id];
      item.fill_rate = this.calculateFillRate(item);
      item.CTR = this.calculateCTR(item);
      item.revenue = Number(item.revenue.toFixed(3));
      reports.push(item);
    });
    this.setState(
      { reports, filteredReports: reports },
      this.updateColumnsMaxMin
    );
  }

  updateDateChange = async (startDate, endDate) => {
    this.setState({ startDate, endDate });
    const appName = await getAppNames();
    this.setState({ appName });
    const reports = await getReport(startDate, endDate);
    this.updateReports(reports);
    this.updateFiltersFromURLparam();
  };

  updateFiltersFromURLparam() {
    const filters = {};
    const urlParam = new URLSearchParams(this.props.location.search);

    for (const key of urlParam.keys()) {
      if (key === "app_name") {
        filters.app_name = { searchText: urlParam.get("app_name") };
      } else if (key === "startDate" || key === "endDate") {
        filters.date = {
          startDate: new Date(urlParam.get("startDate")),
          endDate: new Date(urlParam.get("endDate")),
        };
      } else {
        const path = key.split("_")[0];

        filters[path] = {
          min: Number(urlParam.get(path + "_min")),
          max: Number(urlParam.get(path + "_max")),
        };
      }
      this.setState({ filters }, this.getFilteredReport);
    }
  }

  toggleDisplaySetting() {
    const displaySettings = !this.state.displaySettings;
    this.setState({ displaySettings });
  }

  updateColumns(columns) {
    this.setState({ columns });
  }

  getMaxMin(column) {
    const reports = this.state.filteredReports;
    if (column.dataType === "number") {
      column.max = Math.max(...reports.map((o) => o[column.path]));
      column.min = Math.min(...reports.map((o) => o[column.path]));
      return column;
    }
    return column;
  }

  getTotal(column) {
    const reports = this.state.filteredReports;
    if (column.path === "date") {
      const uniqueDateSet = new Set();
      reports.forEach((e) => {
        uniqueDateSet.add(e.date);
      });
      column.total = uniqueDateSet.size;
    } else if (column.path === "app_name") {
      column.total = reports.length;
    } else if (column.path === "fill_rate" || column.path === "CTR") {
      const length = reports.length;
      const avg = reports.reduce((acc, currentElement) => {
        return acc + currentElement[column.path] / length;
      }, 0);
      column.total = avg / 100;
    } else {
      const sum = reports.reduce((acc, currentElement) => {
        return acc + currentElement[column.path];
      }, 0);
      column.total = sum;
    }

    return column;
  }

  updateColumnsMaxMin() {
    const columns = this.state.columns;
    const updatedColumns = columns.map(this.getMaxMin.bind(this));
    const updatedColumns2 = updatedColumns.map(this.getTotal.bind(this));
    this.setState({ columns: updatedColumns2 });
  }

  updateURLFromFilters() {
    const { filters } = this.state;
    const urlParm = new URLSearchParams();

    for (let path in filters) {
      if (path === "date") {
        urlParm.delete("startDate");
        urlParm.append("startDate", filters.date.startDate.toISOString());
        urlParm.delete("endDate");
        urlParm.append("endDate", filters.date.endDate.toISOString());
      } else if (path === "app_name") {
        urlParm.delete("app_name");
        urlParm.append("app_name", filters.app_name.searchText);
      } else {
        urlParm.delete([path + "_min"]);
        urlParm.append([path + "_min"], filters[path].min);
        urlParm.delete([path + "_max"]);
        urlParm.append([path + "_max"], filters[path].max);
      }
    }
    this.props.history.push({
      pathname: "/analytics",
      search: "?" + urlParm.toString(),
    });
  }

  getFilteredReport() {
    this.updateURLFromFilters();

    const { filters } = this.state;
    let filteredReports = this.state.reports;

    for (let path in filters) {
      if (path === "date") {
        filteredReports = filteredReports.filter((e) => {
          const date = new Date(e.date);
          date.setHours(0);
          date.setMinutes(0);
          return filters.date.startDate <= date && filters.date.endDate >= date;
        });
      } else if (path === "app_name") {
        filteredReports = filteredReports.filter((e) =>
          e.app_name
            .toLowerCase()
            .includes(filters.app_name.searchText.toLowerCase())
        );
      } else {
        filteredReports = filteredReports.filter(
          (e) => e[path] >= filters[path].min && e[path] <= filters[path].max
        );
      }
    }

    this.setState({ filteredReports }, this.updateColumnsMaxMin);
  }

  render() {
    const sortedReport = _.orderBy(
      this.state.filteredReports,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    return (
      <>
        <div className="flex mx-5">
          <DateRange onDateChange={this.updateDateChange} />
          <div className="ml-auto">
            <SettingButton onClick={this.toggleDisplaySetting.bind(this)} />
          </div>
        </div>
        <div>
          {this.state.displaySettings && (
            <SettingBox
              onClick={this.toggleDisplaySetting.bind(this)}
              columns={this.state.columns}
              updateColumns={this.updateColumns.bind(this)}
            />
          )}
        </div>
        <br />
        <div className="m-5">
          <AnalyticsTable data={sortedReport} columns={this.state.columns} />
          {sortedReport.length === 0 && <NoDataToDisplay />}
        </div>
      </>
    );
  }
}

export default Analytics;

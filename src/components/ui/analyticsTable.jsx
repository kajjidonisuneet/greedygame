import React, { Component } from "react";
import Table from "../common/table";


class AnalyticsTable extends Component {
  state = {
    columns: []
  };

  componentDidMount(){
    const columns = this.props.columns
    this.setState({columns})
  }

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

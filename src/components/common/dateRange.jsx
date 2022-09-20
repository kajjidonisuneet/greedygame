import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar2WeekFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";

class DateRange extends Component {


  state = { startDate: null, endDate: null };



  handelDateChange = (update) => {
    const [startDate, endDate] = update
    this.setState({startDate, endDate})
    if (startDate!== null & endDate!==null){
        this.props.onDateChange(startDate, endDate)
    }
  }


  render() {
    return (
      <div className="flex">
        <BsCalendar2WeekFill className="m-2" />
        <div className="border-solid border-4 border-indigo-600">
          <DatePicker
            selectsRange={true}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={(update) => {
              this.handelDateChange(update);
            }}
            withPortal
          />
        </div>
      </div>
    );
  }
}

export default DateRange;

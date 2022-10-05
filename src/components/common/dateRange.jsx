import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar2WeekFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "reactjs-popup";
import { format } from "date-fns";

class DateRange extends Component {
  state = { startDate: new Date(), endDate: new Date(), isOpen: false };

  componentDidMount() {
    this.props.onDateChange(this.state.startDate, this.state.endDate);
  }

  handelDateChange = (update) => {
    const [startDate, endDate] = update;
    this.setState({ startDate, endDate });
    if ((startDate !== null) & (endDate !== null)) {
      this.props.onDateChange(startDate, endDate);
    }
  };

  getFormatDate(){
    if (this.state.endDate === null) {
      return format(this.state.startDate, 'MMM dd' )
    }
    else {
      if (this.state.endDate.getFullYear() === this.state.endDate.getFullYear()){
        return `${format(this.state.startDate, 'MMM dd' )} - ${format(this.state.endDate, 'MMM dd, yyyy' )}`
      } else {
        return `${format(this.state.startDate, 'MMM dd, yyyy' )} - ${format(this.state.endDate, 'MMM dd, yyyy' )}`
      }
    }

  }

  render() {
    return (
      <div>
        <Popup
          trigger={
            <button className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <div className="flex items-center">
                <BsCalendar2WeekFill className="mr-2" size={20} color={'blue'}/>
                <p>
                  {this.getFormatDate()}
                </p>
              </div>
            </button>
          }
        >
          <DatePicker
            selectsRange={true}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={(update) => {
              this.handelDateChange(update);
            }}
            inline
          />
        </Popup>
      </div>
    );
  }
}

export default DateRange;

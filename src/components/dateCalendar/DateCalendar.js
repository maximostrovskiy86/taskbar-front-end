import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DiaryDateCalendarContainer } from "./DateCalendar.styled";
import { ReactComponent as CalendarLogo } from "../../images/calendar.svg";

const DateCalendar = ({ selectDate, elemDate }) => {
  return (
    <DiaryDateCalendarContainer className="date-picker-calendar">
      <DatePicker
        className="datePicker"
        selected={elemDate}
        onChange={(date) => selectDate(date)}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />
      <CalendarLogo className="datePickerLogo" />
    </DiaryDateCalendarContainer>
  );
};

export default DateCalendar;

DateCalendar.propTypes = {
  selectDate: PropTypes.func.isRequired,
  elemDate: PropTypes.string.isRequired,
};

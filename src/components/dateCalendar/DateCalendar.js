import React from "react";
import DatePicker from "react-datepicker";
import {DiaryDateCalendarContainer} from "./DateCalendar.styled"
import {ReactComponent as CalendarLogo} from "../../images/calendar.svg";

const DateCalendar = ({selectDate, elemDate}) => {
    return (
        <DiaryDateCalendarContainer>
            <>
                <DatePicker
                    className="datePicker"
                    selected={elemDate}
                    dateFormat="dd.MM.yyyy"
                    onChange={(date) => selectDate(date)}
                />
                <CalendarLogo className="datePickerLogo"/>
            </>
        </DiaryDateCalendarContainer>
    );
};

export default DateCalendar;

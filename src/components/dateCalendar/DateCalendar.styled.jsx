import styled from "styled-components";
import {ReactComponent as CalendarLogo} from "../../images/calendar.svg";

export const DiaryDateCalendarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    
    .datePicker {
		 width: 140px;
         font-weight: 400;
         font-size: 16px;
         //text-align: center;

         color: ${props => props.theme.colors.secondary};
         border-color: transparent;
		 outline: none;
         cursor: pointer;
    }
    
    .datePickerLogo {
        position: absolute;
		top: 2px;
        right: 75px;
        width: 20px;
		height: 20px;
    }
`;
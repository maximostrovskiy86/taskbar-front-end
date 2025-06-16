import styled from "styled-components";
import {ReactComponent as CalendarLogo} from "../../images/calendar.svg";

export const DiaryDateCalendarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    .date-picker-calendar {
        svg {
            fill: ${props => props.theme.colors.secondary} !important;
        }
    }
    
    
    .datePicker {
        width: 180px;
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
        right: 25px;
        width: 20px;
        height: 20px;
    }
`;
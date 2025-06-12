import styled from "styled-components";
import {ReactComponent as CalendarLogo} from "../../images/calendar.svg";

export const DiaryDateCalendarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    
    .datePicker {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        
        color: ${props => props.theme.colors.secondary};
        
        border-color: transparent;
        cursor: pointer;
        
		transform: translateX(-12px);
        &:after {
            content: "";
            position: absolute;
            right: 20px;
            top: 20px;
            width: 30px;
            height: 30px;
            transform: translateY(-50%);
            
            background-image: url('../../images/calendar.svg');
            
        }
        
        //content: '';
        //position: absolute;
        //top: 50%;
        //right: 28px;
        //width: 24px;
        //height: 24px;
        //transform: translateY(-50%);
        //background-image: url('../images/fly.svg');
    }
    
    .datePickerLogo {
        position: absolute;
		top: 2px;
        right: 65px;
        width: 20px;
		height: 20px;
    }
`;
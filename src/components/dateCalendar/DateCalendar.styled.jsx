import styled from "styled-components";

export const DiaryDateCalendarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .date-picker-calendar {
    svg {
      fill: ${(props) => props.theme.colors.secondary} !important;
    }
  }

  .datePicker {
    width: 190px;
    font-weight: 400;
    font-size: 16px;

    color: ${(props) => props.theme.colors.secondary};
    border-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .datePickerLogo {
    position: absolute;
    top: 0;
    right: 23px;
    width: 20px;
    height: 20px;
  }
`;

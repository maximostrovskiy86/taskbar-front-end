import styled from "styled-components";

export const PopUpConfirmCreateTaskStyled = styled.div`
    .delete-task-enter {
        opacity: 0.5;
        transform: scale(0.7);
    }
    
    .delete-task-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 400ms, transform 400ms;
    }
    
    .delete-task-exit {
        opacity: 1;
    }
    
    .delete-task-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: opacity 400ms, transform 400ms;
    }
`;
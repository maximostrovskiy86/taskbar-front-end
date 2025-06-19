import styled, {css} from "styled-components";

const centeredElement = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopUpConfirmBackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
	${centeredElement};
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 10;
	
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

export const PopUpContent = styled.div`
    position: absolute;
    ${centeredElement};
	flex-direction: column;
    height: 50%;
    width: 80%;

    background-color: #ffffff;
    //opacity: 0;
    //visibility: hidden;
	border-radius: 10px;
`;
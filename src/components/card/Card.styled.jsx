import styled from "styled-components";

export const WrapperAnimate = styled.div`
    .show-animate-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    
    .show-animate-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms, transform 300ms;
    }
    
    .show-animate-exit {
        opacity: 1;
    }
    
    .show-animate-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
`;


export const CardContainer = styled.div`
    width: 260px;
    height: 260px;
    margin-bottom: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	
	color:  ${props => props.$isChallenge ? props.theme.colors.secondary : props.theme.colors.text};
    background-color: ${props => props.$isChallenge ? "#15395a" : "#ffffff"};
    
    
    border-radius: 15px;
    cursor: ${props => (props.$isCompleted ? 'default' : 'pointer')};
    box-shadow: -1px 1px 3px 4px rgba(0, 0, 0, 0.25);
    transition: all 300ms ease-in-out;
    
    &:hover {
        box-shadow: 4px 0 8px 2px rgba(0, 0, 0, 0.25);
        
    }
    
    .main-card {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
		color: ${({theme}) => theme.colors.secondary};
        
        .date {
            padding-right: 7px;
            font-size: 14px;
        }
		
		h5 {
			margin-bottom: 15px;
			font-weight: 400;
		}
		
		h3 {
            font-weight: 400;
            color: ${props => props.$isChallenge ? props.theme.colors.white : props.theme.colors.text};
            
        }
    }
	
	.recover-task-btn {
        width: fit-content;
		margin: 0 auto;
		align-items: baseline;
		font-size: 14px;
		transition: all 0.25s ease-in-out;
        color: ${({theme}) => theme.colors.gray};
        
        &:hover {
			color: ${({theme}) => theme.colors.secondary};
			transform: scale(1.05);
		}
	}
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray};
`;
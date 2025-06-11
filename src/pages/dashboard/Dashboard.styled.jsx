import styled from "styled-components";

export const DashBoardContainer = styled.div`
    .add-task-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
		
		button {
            width: 52px;
            height: 52px;
            
            font-weight: ${props => props.theme.fontWeights.bold};
            font-size: ${props => props.theme.fontSizes.lg};
            line-height: ${props => props.theme.lineHeights.medium};
            background-color: ${props => props.theme.colors.buttonBg};
            color: ${props => props.theme.colors.white};
            border-radius: ${props => props.theme.borderRadius.round};
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            
            &:active {
                background-color: #f37820;
            }
            
            &:hover {
                transform: scale(1.05);
            }
		}
    }
`;
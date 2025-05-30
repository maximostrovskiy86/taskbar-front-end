import styled from "styled-components";

export const ButtonContainer = styled.button`
    // padding-top:${props => props.theme.spacing[2]}px;
    // padding-bottom:${props => props.theme.spacing[2]}px;
	width: 52px;
	height: 52px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.lg};
    line-height: ${props => props.theme.lineHeights.medium};
    text-align: center;
    letter-spacing: 0.04em;
    
    background-color: ${props => props.theme.colors.buttonBg};
    color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.round};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    
    cursor: pointer;
    transition: transform 250ms ease-in;
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:active {
        background-color: #f37820;
    }
`;



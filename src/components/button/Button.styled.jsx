import styled from "styled-components";

export const ButtonContainer = styled.button`
	// &.choice-category {
	// 	color: ${({ theme }) => theme.colors.text};
	// }
	display: flex;
	justify-content: center;
	align-items: center;
    
    font-size: ${({theme}) => theme.fontSizes.md};
    
    text-align: center;
    text-transform: capitalize;
    
    letter-spacing: 0.04em;
    
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    
    background-color: ${props => {
        // console.log("PROPS", props)
        return props.isCategory ? props.bg : "transparent"
    }};
	
    transition: transform 250ms ease-in;
    

	
`;



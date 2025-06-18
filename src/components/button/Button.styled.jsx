import styled from "styled-components";

export const ButtonContainer = styled.button`
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
    transition: transform 250ms ease-in;
`;



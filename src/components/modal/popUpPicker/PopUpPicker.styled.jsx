import styled from 'styled-components';

export const OptionStylContainer = styled.div`

`;

export const BackDrop = styled.div`
    position: fixed;
    inset: 0;
    //background-color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
    //pointer-events: none;
    
    
    //&[aria-hidden="true"] {
    //	opacity: 1;
    //	pointer-events: all;
    //}
    //
    //&[aria-hidden="false"] {
    //    opacity: 0;
    //}
`;

export const PopUpPickerContent = styled.div`
	position: absolute;
	top: 25px;
	left: 0;
    padding: 15px;
    display: inline-block;
    box-shadow: 1px 2px 5px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 8px;
    z-index: 10;
`;



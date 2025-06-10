import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    inset: 0;
    background-color: transparent;
`;

export const PopUpPickerContent = styled.div`
	position: absolute;
    padding: 15px;
    display: inline-block;
    box-shadow: 1px 2px 5px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 8px;
    z-index: 100;
    
    .alert-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    
    .alert-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms, transform 300ms;
    }
    
    .alert-exit {
        opacity: 1;
    }
    
    .alert-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
	
`;



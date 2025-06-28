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
    
    color: ${({theme}) => theme.colors.text};
    
    border-radius: 15px;
	cursor: pointer;
    box-shadow: -1px 1px 3px 4px rgba(0, 0, 0, 0.25);
    transition: all 300ms ease-in-out;
	
	&:hover {
        box-shadow: 4px 0 8px 2px rgba(0, 0, 0, 0.25);
        
    }
    
    .main-card {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        
        .date {
            padding-right: 7px;
            font-size: 14px;
            color: ${({theme}) => theme.colors.gray};
        }
    }
`;

// export const ChoiceCategory = styled.div`
//     select {
//         position: relative;
//         width: 110px;
//         height: 35px;
//         padding-left: 15px;
//         margin-left: -15px;
//         display: flex;
//         align-items: center;
//
//         font-size: 14px;
//         font-weight: 400;
//         text-transform: uppercase;
//
//         background: #D3F6CE;
//         border-top-right-radius: 50px;
//         border-bottom-right-radius: 50px;
//         border: none;
//         outline: none;
//         cursor: pointer;
//     }
// `;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray};
`;
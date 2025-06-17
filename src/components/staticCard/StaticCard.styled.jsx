import styled from "styled-components";

export const StaticCardContainer = styled.div`
    width: 100%;
	height: 100%;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardHeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray};
    
    span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
		text-transform: capitalize;
    }
	
	span + span { margin-left: 7px; };
    
    .easy {
        background-color: #00D7FF;
    }
    
    .normal {
        background-color: #24D40C;
    }
    
    .hard {
        background-color: #DB0837;
    }
`;
export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 35px;
    margin-left: -15px;
    
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    
    background-color: ${props => props.color};
    color: ${({theme}) => theme.colors.text};
    
    
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    
    &.stuff {
        background-color: #b9c3c8;
    }
    
    &.family {
        background-color: #ffe6d3;
    }
    
    &.health {
        background-color: #cdf7ff;
    }
    
    &.learning {
        background-color: #fff6c0;
    }
	
    &.leisure {
        background-color: #f8d2ff;
    }
    
    &.work {
        background-color: #d3f6ce;
    }
`;


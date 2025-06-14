import styled, {css} from "styled-components";

const spanStyles = css`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const OptionsPickerContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    //top: 25px;
    //left: 0;
    
    span[class*="color-selected"] {
        ${spanStyles}
    }
    
    .color-selected-easy {
        background-color: ${({theme}) => theme.colors.secondary};
    }
    
    .color-selected-normal {
        background-color: ${({theme}) => theme.colors.green};
    }
    
    .color-selected-hard {
        background-color: ${({theme}) => theme.colors.red};
    }
    
    .option-list {
        li {
            display: flex;
            align-items: center;
            text-transform: capitalize;
            cursor: pointer;
            transition: color 0.4s cubic-bezier(0.2, 0.5, 0.5, 1);
            
            &:hover {
                color: ${({theme}) => theme.colors.secondary};
            }
        }
        
        li.category-item {
            font-weight: ${({theme}) => theme.fontWeights.normal};
            font-size: ${({theme}) => theme.fontSizes.sm};
            padding-right: 5px;
            padding-left: 5px;
        }
        
        li + li {
            margin-top: 3px;
        }
        
        span {
            ${spanStyles};
            margin-right: 10px;
        }
    }
    
    
    button {
        position: relative;
        color: ${({theme}) => theme.colors.gray};
        
        &:after {
            content: '';
            position: absolute;
            right: ${(props) => {
                return props.isCategoryChoice ? '6%' : "-10px"
            }};
            top: ${(props) => props.isCategoryChoice ? "14px" : "10px"};
            border: 5px solid transparent;
            border-top: 5px solid ${({theme}) => theme.colors.secondary};
        }
        
        &.active::after {
            top: ${(props) => props.isCategoryChoice ? "9px" : "3px"};
            transform: rotate(180deg);
            transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
    
    button.choice-level-btn {
        width: 78px;
        justify-content: left;
    }
    
    button.choice-category-btn {
        width: 110px;
        height: 35px;
        padding-left: 5px;
        margin-left: -15px;
        display: flex;
        align-items: center;
        
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        
        color: ${({theme}) => theme.colors.text};
        
        
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        border: none;
        outline: none;
        cursor: pointer;
    }
    
    .popup-level-enter {
        opacity: 0.5;
        transform: scale(0.7);
    }
    
    .popup-level-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 400ms, transform 400ms;
    }
    
    .popup-level-exit {
        opacity: 1;
    }
    
    .popup-level-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: opacity 400ms, transform 400ms;
    }
`;
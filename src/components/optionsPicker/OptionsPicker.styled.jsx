import styled from "styled-components";

export const OptionsPickerContainer = styled.div`
    position: absolute;
    top: 25px;
    left: 0;
    
    .level-list {
        li {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: color 0.4s cubic-bezier(0.2, 0.5, 0.5, 1);
            
            &:hover {
                color: ${({theme}) => theme.colors.secondary};;
            }
            
            span.label-color {
                display: inline-block;
                width: 12px;
                height: 12px;
                margin-right: 10px;
                border-radius: 50%;
            }
        }
        
        li + li {
            margin-top: 3px;
        }
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
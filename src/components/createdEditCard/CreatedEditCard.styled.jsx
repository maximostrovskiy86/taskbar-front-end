import styled, {css} from "styled-components";
import {CardContainer, CardHeader} from "../card/Card.styled";

const pseudoElementStyle = css`
    content: '|';
    position: absolute;
    width: 2px;
    height: 25px;
    left: -1px;
    color: ${({theme}) => theme.colors.gray};
`;

const transitionStyle = css`
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CreateEditContainer = styled(CardContainer)`
    position: relative;
`;

export const CreateEditHeaderCardContainer = styled(CardHeader)`
    
    .color-selected-level {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        border-radius: 50%;
    }
`;

export const CardInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input#enter-title {
        width: 80%;
        padding: 3px;
        border: none;
        outline: none;
        border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
        caret-color: ${({theme}) => theme.colors.secondary};:;
    }
    
    label {
        font-weight: ${props => props.theme.fontWeights.normal};
        text-transform: uppercase;
        font-size: ${props => props.theme.fontSizes.sm};
        color: ${props => props.theme.colors.gray};
    }
`;

export const ConfirmedCreateDeleteTask = styled.div`
    display: flex;
    align-items: center;
    
    button {
        ${transitionStyle};
    }
    
    .cancel-task {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        
        &:hover {
            transform: scale(1.1);
        }
    }
    
    .create-task {
        position: relative;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fontSizes.md};;
        color: ${({theme}) => theme.colors.secondary};
        ${transitionStyle};
        &:hover {
            color: ${({theme}) => theme.colors.gray};
        }
        
        &:before {
            ${pseudoElementStyle}
        }
    }
    
    h4.popUp-title {
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes.md};
        
    }
    
    .popUp-button-container {
        margin-top: 10px;
        display: flex;
   
        
        button {
            font-size: ${({theme}) => theme.fontSizes.sm};
            text-transform: uppercase;
            ${transitionStyle};
        }
        
        button:first-of-type {
            color: ${({theme}) => theme.colors.green};
            &:hover {
                color: ${({theme}) => theme.colors.gray};
            }
        }
        
        button:last-of-type {
            position: relative;
            color: ${({theme}) => theme.colors.red};
            &:hover {
                color: ${({theme}) => theme.colors.gray};
            }
            
            &:before {
                ${pseudoElementStyle};
                height: 17px;
                left: -3px;
                
            }
        }
    }
`;


export const FooterEditCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

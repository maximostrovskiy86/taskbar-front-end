import styled from "styled-components";
import {CardContainer, CardHeader} from "../card/Card.styled";

export const CreateEditContainer = styled(CardContainer)`

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
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input {
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
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        
        &:hover {
            color: ${({theme}) => theme.colors.gray};
        }
        
        &:before {
            content: '|';
            position: absolute;
            width: 2px;
            height: 25px;
            left: -1px;
            color: ${({theme}) => theme.colors.gray};
        }
    }
`;


export const FooterEditCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

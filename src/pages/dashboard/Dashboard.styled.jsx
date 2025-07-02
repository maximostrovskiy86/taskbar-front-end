import styled from "styled-components";

export const DashBoardContainer = styled.div`
    padding-top: 20px;
    
    h3.dashboard-title {
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: 400;
        
        @media screen and (max-width: 767px) {
            text-align: center;
        }
    }
    
    section {
        padding-top: 25px;
        padding-bottom: 25px;
    }
    
    .today-section {
        padding-top: 0;
    }
    
    .add-task-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        
        button {
            width: 52px;
            height: 52px;
            
            font-weight: ${props => props.theme.fontWeights.bold};
            font-size: ${props => props.theme.fontSizes.lg};
            line-height: ${props => props.theme.lineHeights.medium};
            background-color: ${props => props.theme.colors.buttonBg};
            color: ${props => props.theme.colors.white};
            border-radius: ${props => props.theme.borderRadius.round};
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            
            &:active {
                background-color: #f37820;
            }
            
            &:hover {
                transform: scale(1.05);
            }
        }
    }
    
    .wrapper-done {
        position: relative;
        margin-left: 70px;
        
        &:before {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            background-image: linear-gradient(
                    to right,
                    transparent 40%,
                    #63B8E3FF 40%
            );
            background-repeat: repeat-x;
            background-position: 50% 100%;
            background-size: 20px 100%;
        }
        
        button {
            position: relative;
            left: -75px;
            top: -12px;
                //color: ${({theme}) => theme.colors.gray};
            text-transform: uppercase;
            
            
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                right: -8px;
                border: 6px solid transparent;
                border-top: 6px solid ${({theme}) => theme.colors.secondary};
            }
            
            &.active::after {
                top: 5px;
                transform: rotate(180deg);
                transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    }
`;
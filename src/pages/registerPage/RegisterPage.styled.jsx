import styled from "styled-components";

export const LandingContainer = styled.div`
    padding-top: 94px;
    //background-image: url("../../images/LandingBg.png");
    //background-repeat: no-repeat;
    //background-position: center;
    //background-size: cover;
    
    display: flex; /*footer bottom*/
    min-height: 100vh;
    flex-direction: column;
    
    .container { /*footer bottom*/
        flex: 1;
    }
    
    h1 {
        margin-bottom: 62px;
    }
    
    p {
        max-width: 280px;
        margin-bottom: ${({theme}) => theme.spacing[8]}px;
        font-size: ${props => props.theme.fontSizes.md};
        line-height: ${props => props.theme.lineHeights.medium};
        color: ${props => props.theme.colors.accent};
    }
`;
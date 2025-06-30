import styled from "styled-components";
import bgImg from "../../images/LandingBg.png";
import bgTablet from "../../images/tablet-bg.png";
import bgDesktop from "../../images/desktop-bg.png";

export const LandingContainer = styled.div`
    padding-top: 94px;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: contain;
    flex: 1;
	
    h1 {
        margin-bottom: 62px;
    }
    
    p {
        width: 100%;
        margin-bottom: ${({theme}) => theme.spacing[8]}px;
        font-size: ${props => props.theme.fontSizes.md};
		font-weight: 300;
        line-height: ${props => props.theme.lineHeights.medium};
        color: ${props => props.theme.colors.accent};
    }
    
    @media screen and (min-width: 767px) {
        background-image: url(${bgTablet});
        
        p {
            width: 75%;
            font-size: 24px;
        }
    }
    
    @media screen and (min-width: 1280px) {
        background-image: url(${bgDesktop});
        
        p {
            font-size: 36px;
        }
    }
`;
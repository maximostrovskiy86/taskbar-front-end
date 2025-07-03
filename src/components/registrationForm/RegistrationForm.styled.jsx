import styled from 'styled-components';

export const RegistrationLoginFormContainer = styled.form`
	
    button {
        width: 52px;
        height: 52px;
        margin-top: 15px;
        
        font-weight: ${props => props.theme.fontWeights.bold};
        font-size: ${props => props.theme.fontSizes.md};
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
    
    p {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        color: ${p => p.theme.colors.secondary};
    }
    
    strong a {
        color: ${p => p.theme.colors.buttonBg};
    }
    
    @media screen and (min-width: 767px) {
        align-items: start;
    }
    
    button {
        margin: 20px 0 0;
    }
    
    p {
        text-align: left;
    }
`;

export const LoginInputBox = styled.div`
    position: relative;
	
    label {
        position: absolute;
        top: -1px;
        left: 0;
        padding: 10px 0;
		width: 260px;
        
        font-weight: ${p => p.theme.fontWeights.normal};
        font-size: ${p => p.theme.fontSizes.sm};
        line-height: ${p => p.theme.lineHeights.medium};
        letter-spacing: 0.04em;
        
        color: ${p => p.theme.colors.secondary};
        
        pointer-events: none;
        transition: ${p => p.theme.durations.ms500};
    }
    
    input {
        max-width: 280px;
        padding: 15px 0;
        
        font-size: ${p => p.theme.fontSizes.md};
        
        color: ${p => p.theme.colors.secondary};
        border: ${p => p.theme.borders.none};
        border-bottom: ${p => p.theme.borders.medium} solid ${p => p.theme.colors.secondary};
        outline: none;
        
        &:focus ~ label {
            top: -5px;
            left: 0;
            color: ${p => p.theme.colors.accent};
            font-size: ${p => p.theme.fontSizes.xs};
        }
    }
`;


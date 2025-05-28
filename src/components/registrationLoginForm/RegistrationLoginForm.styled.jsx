import styled from 'styled-components';

export const RegistrationLoginFormContainer = styled.form`
	display: flex;
	justify-content: flex-start;
`;

export const LoginInputBox = styled.div`
    position: relative;
	
    label {
        position: absolute;
        top: -35px;
        left: 0;
        padding: 10px 0;
		width: 260px;
        
        font-weight: ${p => p.theme.fontWeights.normal};
        font-size: ${p => p.theme.fontSizes.sm};
        line-height: ${p => p.theme.lineHeights.medium};
        letter-spacing: 0.04em;
        
        color: ${p => p.theme.colors.gray};
        
        pointer-events: none;
        transition: ${p => p.theme.durations.ms500};
    }
    
    input {
        width: 210px;
        padding: 15px 0;
        margin-right: 30px;
        
        font-size: ${p => p.theme.fontSizes.md};
        
        color: ${p => p.theme.colors.secondary};
        border: ${p => p.theme.borders.none};
        border-bottom: ${p => p.theme.borders.medium} solid ${p => p.theme.colors.primary};
        outline: none;
        
        &:focus ~ label {
            top: -22px;
            left: 0;
            color: ${p => p.theme.colors.accent};
            font-size: ${p => p.theme.fontSizes.xs};
        }
    }
`;


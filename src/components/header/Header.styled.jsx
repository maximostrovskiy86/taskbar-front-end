import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 60px;
    background-color: ${({theme}) => theme.colors.primary};
	
	.container {
		height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
	}

.nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    
    @media screen and (min-width: 767px){
		margin: 0;
    }
    
    
    button {
        background-color: transparent;
        box-shadow: none;
        
        &:hover {
            transform: scale(1.05);
        }
        
        &:active {
            background-color: transparent;
        }
    }
    
    .header-user-name {
		display: flex;
		width: 30px;
		height: 30px;
        margin-right: 10px;
        
        background-color: #3E4E6C;
        color: ${({theme}) => theme.colors.white};
		border-radius: 50%;
        cursor: pointer;
		
		span {
            margin: auto;
        }
    }
	
	.full-user-name {
		font-size: ${({theme}) => theme.fontSizes.md};
		font-weight: 300;
		color: #7B8AA4;
	}
}
`;
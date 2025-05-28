import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 60px;
    background-color: ${({theme}) => theme.colors.accent};
	
	.container {
		height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
	}

.nav {
    display: flex;
    align-items: center;
    
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
    
    .nameIcon {
        cursor: pointer;
		margin-right: 10px;
    }
	
	.cup {
		cursor: pointer;
		margin-right: 10px;
	}
    
    .logOutButton {
        width: 20px;
        height: 20px;
		fill: #3E4E6C;
		
		&:active {
			fill: white;
		}
    }
}
`;
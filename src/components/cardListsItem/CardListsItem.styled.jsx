import styled from "styled-components";


export const CardContainer = styled.div`
    width: 260px;
    height: 260px;
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	
	color: ${({ theme }) => theme.colors.text};
	
    border-radius: 15px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    
    .header-card {
		position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;
        padding-left: 30px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray};
		&:before {
			content: "";
			position: absolute;
			left: 15px;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background: red;
			transform: translateY(-15%);
		}
    }
    
    .main-card {
		font-size: 20px;
		font-weight: 700;
        text-align: center;
		.date {
			padding-right: 7px;
			font-size: 14px;
            color: ${({ theme }) => theme.colors.gray};
        }
    }
    
    
    .category {
        width: 120px;
        height: 35px;
        display: flex;
        align-items: center;
        padding-left: 15px;
		
		font-size: 14px;
		font-weight: 400;
		
		
        background: #D3F6CE;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
`;
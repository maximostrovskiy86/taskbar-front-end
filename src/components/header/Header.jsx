import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HeaderStyle} from "./Header.styled";
import HeadTitle from "../headTitle";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {ReactComponent as Cup} from "../../images/trophy.svg";
import {ReactComponent as NameIcon} from "../../images/nameIcon.svg";
import Button from "../button";
import Container from "../container";
import authOperations from "../../redux/auth/authOperations";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";


const Header = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	const onLogout = async () => {
		console.log("logout", isLoggedIn);
		await dispatch(authOperations.logOut())
	}
	
	return (
		<HeaderStyle>
			<Container>
				<HeadTitle>
					Questify
				</HeadTitle>
				<div className="nav">
					<NameIcon className="nameIcon"/>
					<Cup className="cup"/>
					<Button onClick={onLogout}>
						<RiLogoutCircleRLine className="logOutButton"/>
					</Button>
				</div>
			</Container>
		</HeaderStyle>
	)
}

export default Header;
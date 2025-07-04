import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderStyle } from "./Header.styled";
import HeadTitle from "../headTitle";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Button from "../button";
import Container from "../container";
import authOperations from "../../redux/auth/authOperations";
import { getUserName } from "../../redux/auth/authSelectors";
import { useMediaPredicate } from "react-media-hook";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const moreThan768 = useMediaPredicate("(min-width: 767px)");

  const onLogout = async () => {
    await dispatch(authOperations.logOut());
  };

  return (
    <HeaderStyle>
      <Container>
        <HeadTitle>Questify</HeadTitle>
        <div className="nav">
          <div className="header-user-name">
            <span>{userName.slice(0, 1).toUpperCase()}</span>
          </div>
          <span className="full-user-name">{moreThan768 && userName}</span>
        </div>
        <Button onClick={onLogout}>
          <RiLogoutCircleRLine
            color="3E4E6C"
            size="1.5rem"
            className="log-out-button"
          />
        </Button>
      </Container>
    </HeaderStyle>
  );
};

export default Header;

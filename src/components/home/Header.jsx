import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Intro from "./Intro";

const StyledHeader = styled.header`
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.secondaryDark},
    ${(props) => props.theme.primaryDark}
  );
  background-size: 20px 20px;
  min-height: 100vh;
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBar></NavBar>
      <Intro></Intro>
    </StyledHeader>
  );
};

export default Header;

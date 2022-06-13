import React from "react";
import styled from "styled-components";
import bgImg from "../starsbg.jpg";
import NavBar from "./NavBar";
import Intro from "./Intro";

const StyledHeader = styled.header`
  background-color: green;
  background-size: auto;
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

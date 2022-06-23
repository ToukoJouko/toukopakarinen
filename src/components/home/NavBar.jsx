import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 20px;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.extraLight};
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <NavLink>HOME</NavLink>
        </li>
        <li>
          <NavLink>ABOUT</NavLink>
        </li>
        <li>
          <NavLink>RESUME</NavLink>
        </li>
        <li>
          <NavLink>PROJECTS</NavLink>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default Navbar;

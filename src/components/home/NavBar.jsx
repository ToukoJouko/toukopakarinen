import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.primaryDark};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1000;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 20px;
  }

  a {
    color: ${(props) => props.theme.extraLight};
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
    text-decoration: none;
    transition: color 0.7s;
  }

  .active {
    color: ${(props) => props.theme.highlight};
  }
`;

const Navbar = ({
  headerActive,
  aboutActive,
  resumeActive,
  projectsActive,
}) => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <a href="#home" className={headerActive}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className={aboutActive}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#resume" className={resumeActive}>
            RESUME
          </a>
        </li>
        <li>
          <a href="#projects" className={projectsActive}>
            PROJECTS
          </a>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default Navbar;

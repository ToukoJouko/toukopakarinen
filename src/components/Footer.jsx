import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  height: 200px;
  position: relative;

  .back {
    position: absolute;
    top: -5px;
  }
`;

const Social = styled.ul`
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  width: 20%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a className="back">
        <i class="fa-solid fa-circle-chevron-up fa-2xl"></i>
      </a>
      <Social>
        <li>
          <a>
            <i class="fa-brands fa-linkedin-in fa-2xl fa-fw"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="fa-brands fa-github fa-2xl fa-fw"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="fa-brands fa-telegram fa-2xl fa-fw"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="fa-solid fa-envelope fa-2xl fa-fw"></i>
          </a>
        </li>
      </Social>
    </StyledFooter>
  );
};

export default Footer;

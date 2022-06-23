import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.primaryDark};
  color: ${(props) => props.theme.secondaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  position: relative;

  .back {
    background-color: ${(props) => props.theme.extraMid};
    color: ${(props) => props.theme.extraLight};
    position: absolute;
    top: -18px;
    border-radius: 50%;
    padding: 10px;
  }

  span {
    margin-top: 30px;
  }
`;

const Social = styled.ul`
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
        <i class="fa-solid fa-chevron-up fa-xl"></i>
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
      <span>Touko Pakarinen | Portfolio</span>
    </StyledFooter>
  );
};

export default Footer;

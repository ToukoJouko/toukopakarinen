import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.extraLight};
    text-align: center;
    font-size: 6em;
    margin-top: 15%;
  }

  h3 {
    color: ${(props) => props.theme.extraMid};
    text-align: center;
    max-width: 700px;
    margin-left: 20px;
    margin-right: 20px;
    line-height: 1.6;
  }

  div {
    color: ${(props) => props.theme.extraLight};
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
  }

  a {
    color: ${(props) => props.theme.extraLight};
    transition: color 0.7s;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

const Social = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  width: 20%;
`;

const Intro = () => {
  return (
    <Container>
      <h1>I'm Touko Pakarinen.</h1>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h3>
      <Social>
        <li>
          <a href="https://www.linkedin.com/in/touko-pakarinen-3b13b0205/">
            <i className="fa-brands fa-linkedin-in fa-2xl fa-fw"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/ToukoJouko">
            <i className="fa-brands fa-github fa-2xl fa-fw"></i>
          </a>
        </li>
        <li>
          <a href="mailto:toukop97@gmail.com">
            <i className="fa-solid fa-envelope fa-2xl fa-fw"></i>
          </a>
        </li>
      </Social>
      <div>
        <a href="#about">
          <i className="fa-solid fa-circle-chevron-down fa-2xl"></i>
        </a>
      </div>
    </Container>
  );
};

export default Intro;

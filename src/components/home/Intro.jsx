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
        I am a student and an aspiring developer currently based in Joensuu.
        Most of my experience is in fullstack development, but i am open to all
        kinds of opportunities related to software development and the
        IT-industry as a whole.
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

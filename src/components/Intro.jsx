import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    text-align: center;
    font-size: 6em;
  }

  h3 {
    text-align: center;
    max-width: 40%;
  }
`;

const Social = styled.ul`
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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
      <a>
        <i class="fa-solid fa-circle-chevron-down"></i>
      </a>
    </Container>
  );
};

export default Intro;

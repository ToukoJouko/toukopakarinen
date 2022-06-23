import React from "react";
import styled from "styled-components";
import facepic from "./facepic.jpg";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.secondaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12vw;
  padding-left: 12vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 700px;

  img {
    border-radius: 100%;
  }

  .about {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }

  .about > .aboutText {
    display: block;

    p {
      line-height: 1.6;
    }
  }

  .contact {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;

    div {
      line-height: 1.6;
    }
  }

  h2,
  a {
    color: ${(props) => props.theme.extraLight};
  }

  a {
    background-color: ${(props) => props.theme.extraMid};
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    font-style: bold;
  }

  p,
  span {
    color: ${(props) => props.theme.extraMid};
    font-size: 18px;
  }
`;

const About = () => {
  return (
    <StyledSection>
      <Container>
        <img src={facepic} alt="facepic" width="170" height="170"></img>
        <div className="about">
          <div className="aboutText">
            <h2>About Me</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="contact">
            <div>
              <h2>Contact Info</h2>
              <span>Touko Pakarinen</span>
              <br />
              <span>Joensuu, Finland</span>
              <br />
              <span>toukop97@gmail.com</span>
            </div>
            <a>
              <h4>Download Resume</h4>
            </a>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import facepic from "./facepic.jpg";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12vw;
  padding-left: 12vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-bottom: 100px;

  img {
    border-radius: 100%;
  }

  .contact {
    display: flex;
  }
`;

const About = () => {
  return (
    <StyledSection>
      <Container>
        <img src={facepic} alt="facepic" width="170" height="170"></img>
        <div>
          <h2>About Me</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className="contact">
            <div>
              <h2>Contact Info</h2>
              <span>Touko Pakarinen</span>
              <br />
              <span>Joensuu, Finland</span>
              <br />
              <a>toukop97@gmail.com</a>
            </div>
            <a>Download Resume</a>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default About;

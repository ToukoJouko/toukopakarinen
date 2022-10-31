import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import facepic from "./facepic.jpg";
import cv from "./CV Touko Pakarinen.pdf";

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
    text-decoration: none;
    transition: background-color 0.7s;

    &:hover {
      background-color: ${(props) => props.theme.highlight};
    }
  }

  p,
  span {
    color: ${(props) => props.theme.extraMid};
    font-size: 18px;
  }
`;

const About = React.forwardRef((props, ref) => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef();

  useEffect(() => {
    setHeight(heightRef.current.offsetTop);
    console.log(height);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      height,
    };
  });
  return (
    <StyledSection id="about" ref={heightRef}>
      <Container>
        <img src={facepic} alt="facepic" width="170" height="170"></img>
        <div className="about">
          <div className="aboutText">
            <h2>About Me</h2>
            <p>
              I am a 3rd year computer science major at the University of
              Eastern Finland in Joensuu. My goal is to finish ny bachelor's
              degree during 2023. In addition to my studies and programming, i
              like to play the guitar, go to the gym and arrange different
              student events.
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
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <h4>Download CV</h4>
            </a>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
});

export default About;

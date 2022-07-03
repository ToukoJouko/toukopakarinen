import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";
import test from "./images/test.jpg";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.extraLight};
  display: block;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 40px;

  h2 {
    color: ${(props) => props.theme.extraMid};
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Projects = React.forwardRef((props, ref) => {
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
    <StyledSection id="projects" ref={heightRef}>
      <h2>Here are some projects i have created.</h2>
      <div>
        <SingleProject image={test} name={"test name"}></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
      </div>
    </StyledSection>
  );
});

export default Projects;

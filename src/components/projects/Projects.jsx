import React from "react";
import styled from "styled-components";
import SingleProject from "./SingleProject";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.secondaryLight};
  display: block;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 40px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Projects = () => {
  return (
    <StyledSection>
      <h2>Here are some of the projects i have created.</h2>
      <div>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
      </div>
    </StyledSection>
  );
};

export default Projects;

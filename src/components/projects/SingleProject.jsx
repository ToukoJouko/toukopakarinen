import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  position: relative;
`;

const Overlay = styled.div`
  background-color: ${(props) => props.theme.secondaryDark};
  color: ${(props) => props.theme.extraLight};
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;

  &:hover {
    opacity: 0.5;
  }
`;

const SingleProject = ({ image, name }) => {
  return (
    <Container>
      <img src={image} alt="projectImage"></img>
      <Overlay>
        <h4>{name}</h4>
        <span>Click for more info.</span>
      </Overlay>
    </Container>
  );
};

export default SingleProject;

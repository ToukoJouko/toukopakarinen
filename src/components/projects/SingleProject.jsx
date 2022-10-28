import React, { useState } from "react";
import styled from "styled-components";
import Sidesheet from "./Sidesheet";

const Container = styled.div`
  position: relative;
`;

const OverlayContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  position: relative;
`;

const Overlay = styled.div`
  color: rgba(255, 255, 255, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  transition: background-color 0.7s;

  h4,
  span {
    padding: 20px;
    transition: color 0.7s;
  }

  &:hover {
    background-color: rgba(16, 35, 109, 0.5);
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

const SingleProject = ({ image, name }) => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <Container>
      <OverlayContainer onClick={() => setShowSheet(true)}>
        <img src={image} alt="projectImage"></img>
        <Overlay>
          <h4>{name}</h4>
          <span>Click for more info.</span>
        </Overlay>
      </OverlayContainer>
      {showSheet ? <Sidesheet></Sidesheet> : ""}
    </Container>
  );
};

export default SingleProject;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
`;

const ContentContainer = styled(Container)`
  background-color: white;
  width: 90vw;

  div {
    background-color: gray;
    position: absolute;
    height: 80px;
    width: 100%;
    top: 0;
  }
`;

const Sidesheet = () => {
  return (
    <Container>
      <ContentContainer>
        <div>
          <h3>title tulee tähän</h3>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Sidesheet;

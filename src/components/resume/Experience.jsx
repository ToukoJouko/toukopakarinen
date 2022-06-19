import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  max-width: 400px;
  margin-bottom: 30px;

  p,
  h3 {
    word-break: break-word;
    max-width: 400px;
  }
`;

const Experience = ({ place, title, duration, desc }) => {
  return (
    <Container>
      <h3>{place}</h3>
      <p>
        {title}
        <span> • </span>
        {duration}
      </p>
      <p className="desc">{desc}</p>
    </Container>
  );
};

export default Experience;

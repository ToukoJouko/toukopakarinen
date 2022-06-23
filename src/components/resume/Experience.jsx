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

  p {
    color: ${(props) => props.theme.extraMid};
  }

  h3 {
    color: ${(props) => props.theme.extraDark};
  }
`;

const Experience = ({ place, title, duration, desc }) => {
  return (
    <Container>
      <h3>{place}</h3>
      <p>
        <i>{title}</i>
        <span> • </span>
        {duration}
      </p>
      <p className="desc">{desc}</p>
    </Container>
  );
};

export default Experience;

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
    margin-top: 10px;
    line-height: 1.6;
  }

  h3 {
    color: ${(props) => props.theme.extraLight};
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

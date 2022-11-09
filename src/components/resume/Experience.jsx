import React from "react";
import styled from "styled-components";
import breakpoints from "../Breakpoints";

const Container = styled.div`
  display: block;
  margin-bottom: 30px;

  @media ${breakpoints.tablet} {
    max-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p,
  h3 {
    word-break: break-word;
    max-width: 400px;
    text-align: left;

    @media ${breakpoints.tablet} {
      text-align: center;
    }
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

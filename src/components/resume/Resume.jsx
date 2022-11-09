import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import Experience from "./Experience";
import breakpoints from "../Breakpoints";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.primaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 80px;
  padding-bottom: 40px;
  padding-right: 12vw;
  padding-left: 12vw;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 700px;
  max-width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.secondaryDark};
  padding-right: 10px;
  padding-left: 10px;

  h2 {
    border-bottom: 2px solid ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.extraLight};

    @media ${breakpoints.tablet} {
      margin-bottom: 20px;
    }
  }

  @media ${breakpoints.tablet} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    margin-bottom: 30px;
    gap: 5px;
  }

  .skills > span {
    padding: 5px;
    background-color: ${(props) => props.theme.extraMid};
    color: ${(props) => props.theme.extraDark};
  }
`;

const SkillsContainer = styled(Container)`
  border: none;
`;

const Resume = React.forwardRef((props, ref) => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef();

  useEffect(() => {
    setHeight(heightRef.current.offsetTop);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      height,
    };
  });

  return (
    <StyledSection id="resume" ref={heightRef}>
      <Container>
        <div className="category">
          <h2>EDUCATION</h2>
        </div>
        <div>
          <Experience
            place={"University of Eastern Finland"}
            title={"Bachelor's degree, Computer Science"}
            duration={"2020 - 2023"}
            desc={
              "I'm currently working towards my bachelor's degree. My minor subjects are chemistry and geoinformatics."
            }
          ></Experience>
          <Experience
            place={"Iisalmen Lyseo"}
            title={"High school Diploma"}
            duration={"2013-2016"}
          ></Experience>
        </div>
      </Container>
      <Container>
        <div className="category">
          <h2>WORK</h2>
        </div>
        <div>
          <Experience
            place={"Nolwenture ltd."}
            title={"Software Engineer Trainee"}
            duration={"May 2022 - August 2022"}
            desc={
              "Worked both on front- and backend of a data structurization web app. On the frontend created reusable menu components for a component library, and forms for API and database generation. On the backend created unit tests, and CRUD-actions. Also created general functions, which the app used to process data. In addition learnt more about the workflow of software development in a professional setting. Main technologies used: Typescript, react, node, jest and docker."
            }
          ></Experience>
        </div>
      </Container>
      <Container>
        <div>
          <h2>VOLUNTEERING</h2>
        </div>
        <div>
          <Experience
            place={"Skripti ry"}
            title={"Sports- and event-organizer"}
            duration={"January 2021 - Present"}
            desc={
              "Organized events, and arranged weekly exercise shifts for the members of Skripti ry."
            }
          ></Experience>
          <Experience
            place={"Skripti ry"}
            title={"Tutor"}
            duration={"September 2021 - May 2022"}
            desc={
              "Taught basic university practices, and arranged events for the computer science freshmen of 2021."
            }
          ></Experience>
        </div>
      </Container>
      <SkillsContainer>
        <div>
          <h2 className="skillsHeading">SKILLS</h2>
        </div>
        <div className="skills">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>CSS</span>
          <span>HTML5</span>
          <span>ReactJs</span>
          <span>NodeJs</span>
          <span>Jest</span>
          <span>MongoDB</span>
          <span>Docker</span>
        </div>
      </SkillsContainer>
    </StyledSection>
  );
});

export default Resume;

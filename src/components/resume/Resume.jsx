import React from "react";
import styled from "styled-components";
import Experience from "./Experience";

const StyledSection = styled.section`
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-right: 12vw;
  padding-left: 12vw;
`;

const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 700px;
  max-width: 100%;
  border-bottom: 2px solid black;
  padding-right: 10px;
  padding-left: 10px;

  h2 {
    width: 200px;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    margin-bottom: 30px;
  }

  .skills > span {
    padding: 3px;
  }
`;
const Resume = () => {
  return (
    <StyledSection>
      <Container>
        <h2>EDUCATION</h2>
        <div>
          <Experience
            place={"University of Eastern Finland"}
            title={"Bachelor's degree, Computer Science"}
            duration={"2020 - 2023"}
            desc={
              "fdsafadsfsadfasdfasfasdfasfsdafsafsadfasfasdfasfasgdfsgsdfgsdgsdgsdfgsdgsdfasdfdasfasf"
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
        <h2>WORK</h2>
        <div>
          <Experience
            place={"Nolwenture ltd."}
            title={"Software Engineer Trainee"}
            duration={"May 2022 - August 2022"}
            desc={
              "fdsafadsfsadfasdfasfasdfasfsdafsafsadfasfasdfasfasgdfsgsdfgsdgsdgsdfgsdgsdfasdfdasfasf"
            }
          ></Experience>
        </div>
      </Container>
      <Container>
        <h2>VOLUNTEERING</h2>
        <div>
          <Experience
            place={"Skripti ry"}
            title={"Sports- and event-organizer"}
            duration={"January 2021 - Present"}
            desc={
              "fdsafadsfsadfasdfasfasdfasfsdafsafsadfasfasdfasfasgdfsgsdfgsdgsdgsdfgsdgsdfasdfdasfasf"
            }
          ></Experience>
          <Experience
            place={"Skripti ry"}
            title={"Tutor"}
            duration={"September 2021 - May 2022"}
            desc={
              "fdsafadsfsadfasdfasfasdfasfsdafsafsadfasfasdfasfasgdfsgsdfgsdgsdgsdfgsdgsdfasdfdasfasf"
            }
          ></Experience>
        </div>
      </Container>
      <Container>
        <h2>SKILLS</h2>
        <div className="skills">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>CSS</span>
          <span>HTML5</span>
          <span>ReactJs</span>
          <span>NodeJs</span>
          <span>Jest</span>
        </div>
      </Container>
    </StyledSection>
  );
};

export default Resume;

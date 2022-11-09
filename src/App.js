import React, { useState, useEffect, useRef } from "react";
import Header from "./components/home/Header";
import NavBar from "./components/home/NavBar";
import Intro from "./components/home/Intro";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";

function App() {
  const headerHeight = useRef();
  const aboutHeight = useRef();
  const resumeHeight = useRef();

  const [scrollPos, setScrollPos] = useState(0);
  const [header, setHeader] = useState(true);
  const [about, setAbout] = useState(false);
  const [resume, setResume] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (scrollPos >= 0 && scrollPos <= window.innerHeight - 70) {
      setHeader(true);
      setAbout(false);
      setResume(false);
    } else if (
      scrollPos >= window.innerHeight - 70 &&
      scrollPos <= resumeHeight.current.height - 70
    ) {
      setHeader(false);
      setAbout(true);
      setResume(false);
    } else if (scrollPos >= resumeHeight.current.height - 70) {
      setHeader(false);
      setAbout(false);
      setResume(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header ref={headerHeight}>
          <NavBar
            headerActive={header ? "active" : ""}
            aboutActive={about ? "active" : ""}
            resumeActive={resume ? "active" : ""}
          ></NavBar>
          <Intro></Intro>
        </Header>
        <About ref={aboutHeight}></About>
        <Resume ref={resumeHeight}></Resume>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from "react";

import Header from "./components/home/Header";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <About></About>
        <Resume></Resume>
        <Projects></Projects>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;

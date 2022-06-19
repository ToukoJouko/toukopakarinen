import React from "react";

import Header from "./components/home/Header";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;

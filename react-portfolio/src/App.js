import React from "react";
import Header from "./components/header/header.js";
import Project from "./components/project/project.js"
import "./assets/main.css"
import Footer from "./components/footer/footer.js";
import AboutMe from "./components/aboutMe/aboutMe.js";

function App() {
  return (
    <>
    <Header/>
    {/* <Project/> */}
    <AboutMe/>
    <Footer/>
    </>
  )
}

export default App;

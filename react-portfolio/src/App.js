import React from "react";
import Header from "./components/header/header.js";
import Project from "./components/project/project.js"
import "./assets/main.css"
import Footer from "./components/footer/footer.js";
import AboutMe from "./components/aboutMe/aboutMe.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Project} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route path="/" component={Footer} />
    </Router>
  )
}

export default App;

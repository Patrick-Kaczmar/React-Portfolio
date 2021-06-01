import React from "react";
import "./assets/main.css"
import Header from "./components/header/header.js";
import Project from "./components/project/project.js"
import Footer from "./components/footer/footer.js";
import AboutMe from "./components/aboutMe/aboutMe.js";
import {HashRouter, HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="ReactPortfolio">
      <Router>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Project} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route path="/" component={Footer} />
      </Router>
    </HashRouter>
  )
}

export default App;

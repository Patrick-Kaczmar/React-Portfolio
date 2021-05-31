import "./project.css"
import React from "react";
import employeeDirectoryImg from "../../assets/Employee-directory-2.png";
import budgetTrackerImg from "../../assets/budget-tracker.png";
import workoutStats from "../../assets/workout-stats.png";
import pathFinder from "../../assets/path-finder.png";
import trackerDemo from "../../assets/Employee-tracker-demo.gif";
import workdayDemo from "../../assets/workday-demo.png";
import Particles from 'react-particles-js';
import ParticlesConfig from "../../components/particalConfig/configParticles";

function Project() {
    const myProjects = [
        {
            image: employeeDirectoryImg,
            title: "Employee Directory",
            desc: "This app was built using react as the front end framework to showcase the use of react components and file structure.",
            tech: ["React", "javascript", "bootstrap", "HTML", "CSS"],
            gitLink: "https://github.com/Patrick-Kaczmar/Employee-Directory",
            hostLink: "https://patrick-kaczmar.github.io/Employee-Directory/",
        },
        {
            image: budgetTrackerImg,
            title: "Budget Tracker",
            desc: "This is a progressive web app for tracking your expenses and deposites and shows you your overall budget on a graph for a visual representaion of your spending.",
            tech: ["Javascript", "MongoDB", "Mongoose", "IndexedDB", "Service Worker", "Webpack"],
            gitLink: "https://github.com/Patrick-Kaczmar/Budget-Tracker",
            hostLink: "https://boiling-refuge-26689.herokuapp.com/",
        },
        {
            image: workoutStats,
            title: "Workout Tracker",
            desc: "This application can create and track a users workout routine and dynamicly display the information in separate charts based on different cardio and resistance exercises.",
            tech: ["Javascript", "MongoDB", "Mongoose", "Node.js", "Express"],
            gitLink: "https://github.com/Patrick-Kaczmar/Workout-Tracker",
            hostLink: "https://nameless-inlet-68704.herokuapp.com/",
        },
        {
            image: pathFinder,
            title: "Path Finder",
            desc: "This is a full stack app built off the google maps api to allow users to get nearby search results for activities using the users geolocation.",
            tech: ["Javascript", "MySql", "Sequelize", "Handlebars", "Google maps API", "Open weather API", "Node.js", "Bootstrap", "Passport.js"],
            gitLink: "https://github.com/Patrick-Kaczmar/Path-Finder",
            hostLink: "https://apple-shortcake-96876.herokuapp.com/",
        },
        {
            image: trackerDemo,
            title: "Employee Tracker",
            desc: "This application allows the user to create and manipulate data that is used to organize company information. You are able to create departments, Roles and employee's in a structured way that will allow you to view all this data in readable format.",
            tech: ["Javascript", "MySql", "Inquirer", "Node.js"],
            gitLink: "https://github.com/Patrick-Kaczmar/Employee-Tracker",
            hostLink: "https://github.com/Patrick-Kaczmar/Employee-Tracker",
        },
        {
            image: workdayDemo,
            title: "Workday Scheduler",
            desc: "A workday Scheduler made by using the new Date function to color code the text fields based on the time of day. Also saves all the user data to local storage when a user saves the specified text field.",
            tech: ["HTML", "CSS", "Javascript", "jQuery"],
            gitLink: "https://github.com/Patrick-Kaczmar/Work-day-scheduler",
            hostLink: "https://patrick-kaczmar.github.io/Work-day-scheduler/",
        }
    ]

    return (
        <div style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute' }}>
                    <Particles height="100vh" width="100vw" params={ParticlesConfig} />
                </div>
            <div className="container" >
                <div className="row">
                    {myProjects.map(project => (
                        <div key={project.title} className="col col-sm-12 col-md-6 col-xl-4">
                            <div className="card">
                                <img src={project.image} className="card-img-top" alt="Project" />
                                <div className="card-body text-white bg-info">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-text">{project.desc}</p>
                                </div>
                                <ul className="list-group list-group-flush text-white bg-secondary">
                                    <h5>Technology's used</h5>
                                    {project.tech.map(technology => <li key={Math.floor(Math.random() * 100000)}>( {technology} )</li>)}
                                </ul>
                                <div className="card-body bg-dark">
                                    <a href={project.gitLink} className="card-link" style={{ marginRight: "35%" }}>Github link</a>
                                    <a href={project.hostLink} className="card-link">Active link</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;
import "./project.css"
import React from "react";
import employeeDirectoryImg from "../../assets/Employee-directory-2.png";
import budgetTrackerImg from "../../assets/budget-tracker.png";
import workoutStats from "../../assets/workout-stats.png";
import pathFinder from "../../assets/path-finder.png";
import aniGateDemo from "../../assets/animeProject.png";
import workdayDemo from "../../assets/workday-demo.png";
import Particles from 'react-particles-js';
import ParticlesConfig from "../../components/particalConfig/configParticles";

function Project() {
    const myProjects = [
        {
            image: employeeDirectoryImg,
            title: "Employee Directory",
            desc: "This app was built using react as the front end framework to showcase the use of react components and file structure.",
            tech: ["React", "javascript", "bootstrap","Axios","Random user API", "HTML", "CSS"],
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
            image: aniGateDemo,
            title: "Ani-Gate",
            desc: "This is a full stack application built using the MERN stack. It uses the unofficial MAL API provided by JIKAN to retrieve data about anime from MyAnimeList.",
            tech: ["Express", "HTML", "SASS", "Javascript", "Material UI", "node.js", "MongoDB", "Jikan API", "React"],
            gitLink: "https://github.com/Patrick-Kaczmar/Employee-Tracker",
            hostLink: "https://github.com/Patrick-Kaczmar/Employee-Tracker",
        },
        {
            image: workdayDemo,
            title: "Workday Scheduler",
            desc: "A workday Scheduler made by using the new Date function to color code the text fields based on the time of day. Also saves all the user data to local storage when a user saves the specified text field.",
            tech: ["HTML", "CSS", "Javascript","Local storage", "jQuery"],
            gitLink: "https://github.com/Patrick-Kaczmar/Work-day-scheduler",
            hostLink: "https://patrick-kaczmar.github.io/Work-day-scheduler/",
        }
    ]

    return (
        <div id="particleBody" style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute' }}>
                    <Particles height="170vh" width="170vw" params={ParticlesConfig} />
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
                                    <a className="btn btn-primary card-link" style={{ marginRight: "5%", marginLeft: "10%" }} href={project.gitLink} role="button">Github link</a>
                                    <a className="btn btn-primary card-link"  href={project.hostLink} role="button">Active link</a>
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
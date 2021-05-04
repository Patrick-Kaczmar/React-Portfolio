import "./project.css"
import React from "react";

function Project() {
    const myProjects = [
        {
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            title: "Project 1",
            desc: "Description 1",
            tech: "Tech 1",
            gitLink: "github link 1",
            hostLink: "host link 1",
        },
        {
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            title: "Project 2",
            desc: "Description 2",
            tech: "Tech 2",
            gitLink: "github link 2",
            hostLink: "host link 2",
        },
        {
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            title: "Project 3",
            desc: "Description 3",
            tech: "Tech 3",
            gitLink: "github link 3",
            hostLink: "host link 3",
        },
        {
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            title: "Project 4",
            desc: "Description 4",
            tech: "Tech 4",
            gitLink: "github link 4",
            hostLink: "host link 4",
        },
        {
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            title: "Project 5",
            desc: "Description 5",
            tech: "Tech 5",
            gitLink: "github link 5",
            hostLink: "host link 5",
        },
        {
            image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            title: "Project 6",
            desc: "Description 6",
            tech: "Tech 6",
            gitLink: "github link 6",
            hostLink: "host link 6",
        }
    ]

    return (
        <div className="container">
            <div className="row">
                {myProjects.map(project => (
                    <div key={project.title} className="col col-sm-12 col-md-6 col-xl-4">
                        <div className="card" style={{ width: "22rem", height: "450px", marginBottom: "20px"}}>
                            <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;
import "./header.css"
import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    const path = props.location.pathname;
    return (
        <nav id="parentNav" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className={"nav-link " + (path === "/" ? "active" : "")} to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="https://github.com/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/Patrick-Kaczmar" rel="noreferrer" target="_blank">GitHub <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/patrick-kaczmar-17b9701b8/" rel="noreferrer" target="_blank">Linkedin</a>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link " + (path === "/aboutme" ? "active" : "")} to="/aboutme">About me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
import "./header.css"
import React from "react";

function Header() {
    return (
        <nav id="parentNav" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="https://github.com/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://github.com/">GitHub <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/patrick-kaczmar-17b9701b8/">Linkden</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Project list
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="https://github.com/">Action</a></li>
                            <li><a className="dropdown-item" href="https://github.com/">Another action</a></li>
                            <li><a className="dropdown-item" href="https://github.com/">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
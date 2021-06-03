import "./aboutMe.css"
import React from "react";
import patrickImage from "../../assets/profile-red.jpeg"

function AboutMe() {
    return (
        <>
            <div id="wrapper" style={{ height: "900px" }}>
                <header id="aboutheader">
                    <br /><br /><br /><br />
                    <h1>ABOUT ME</h1>
                </header>
                <br /><br /><br /><br />
                <main>
                    <figure id="aboutfigure">
                        <img id="aboutimg" src={patrickImage} alt="Patrick" />
                    </figure>
                    <br /><br />
                        <p id="aboutp" >
                            Full stack web developer with emphasis on the MERN stack. Development skills in HTML, CSS, SASS and
                            JavaScript, used in conjunction with MongoDB/MySQL, Express, React and Node.js. Received
                            certification from Rutgers full stack coding bootcamp and learned how to perform on a team in an Agile
                            workflow. I strive to create exactly what my team or client envisions when programming, and I'm always
                            learning the newest technologies to keep up-to-date in computer science. I'm excited to use my skills on
                            a quality-driven team and continue to expand my coding knowledge in a fast-paced environment.
                    </p>
                </main>
            </div>
        </>
    )
}

export default AboutMe;
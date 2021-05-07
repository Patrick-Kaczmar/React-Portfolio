import "./aboutMe.css"
import React from "react";
import patrickImage from "../../assets/profile-red.jpeg"

function AboutMe() {
    return (
        <>
            <header id="aboutheader">
                <h1>ABOUT ME</h1>
            </header>
            <br /><br /><br /><br />
            <main>
                <figure id="aboutfigure">
                    <img id="aboutimg" src={patrickImage} alt="Patrick" />
                </figure>
                <p id="aboutp">
                    I enjoy spending time coding and learning something new everyday. Completing
                    difficult projects and tasks within this field has given me the motivation and
                    knowledge to keep progressing my skillset and pushing my satifactory standards
                    higher. I aspire to one day be able to work for a company that strives to push the
                    boundaries
                    of science and engineering. I am hopeful that becoming a full-stack developer will
                    be the first of many milestones on my journey to fulfill my aspirations.
                </p>
            </main>
        </>
    )
}

export default AboutMe;
import "./footer.css"
import React from "react";

function Footer() {
    return (
        <footer>
            <p class="inLine">My email: <a id="myEmail" href="/" onclick="return false">pk1blue@yahoo.com</a></p>
            <p id="copyRight" class="inLine">My Phone# 845-545-4752</p>
            <a class=" inLine" href="https://drive.google.com/file/d/1h9YONuBULUaO7lHalEniQgOY9K7FNCGo/view?usp=sharing" rel="noreferrer" target="_blank"><span class="navUniform">My Resume</span></a>
        </footer>
    )
}

export default Footer;
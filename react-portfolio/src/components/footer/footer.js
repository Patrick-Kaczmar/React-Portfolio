import "./footer.css"
import React from "react";

function Footer() {
    return (
        <footer>
            <p className="inLine">My email: <a id="myEmail" href="/">pk1blue@yahoo.com</a></p>
            <p id="copyRight" className="inLine">My Phone# 845-545-4752</p>
            <a className=" inLine" href="https://drive.google.com/file/d/1Q4s-7X0M4wZqPPkuKNLE6PmPDnX_935T/view?usp=sharing" rel="noreferrer" target="_blank"><span className="navUniform">My Resume</span></a>
        </footer>
    )
}

export default Footer;
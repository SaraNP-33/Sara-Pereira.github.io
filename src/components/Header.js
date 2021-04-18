import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Full Stack Software Engineer</h1>
                <Typed className="typed-text"
                strings={["Beautiful Web Designs", "JavaScript Lover", "Database Pro", "Server-Side Enthusiast", "Life Long Learner"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#contact" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header

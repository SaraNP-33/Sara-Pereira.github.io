import React, {useState}from "react";
import logo from "../../src/images/flowerlogo.png";
import { Link } from 'react-scroll';
//  REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [isMobile, setIsMobile]= useState(false)

    const navRef = React.useRef();
    navRef.current = true;

    return (
            <div id="nav" className={navRef.current}>
            <a className="navbar-brand" href="#navbar"><img className="logo" src={logo} alt="logo"/></a>
    
            <ul className={isMobile? "nav-links-mobile" : "nav-links"}>
                <Link smooth={true} to="home" offset={-100} href="#" className="nav-home">
                    <li onClick={() => setIsMobile(false)}>⇧top</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="about" offset={-100} href="#" className="nav-about">
                    <li onClick={() => setIsMobile(false)}>about</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="skills" offset={-100} href="#" className="nav-skills">
                    <li onClick={() => setIsMobile(false)}>skills</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="experience" offset={-100} href="#" className="nav-experience">
                    <li onClick={() => setIsMobile(false)}>experience</li>
                </Link>
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="portfolio" offset={-100} href="#" className="nav-portfolio">
                    <li onClick={() => setIsMobile(false)}>portfolio</li>
                </Link>
                {/* <span className="diamond">&#9670;</span>
                <Link smooth={true} to="references" offset={-70} href="#" className="nav-references">
                    <li onClick={() => setIsMobile(false)}>references</li>
                </Link> */}
                <span className="diamond">&#9670;</span>
                <Link smooth={true} to="contact" offset={-100} href="#" className="nav-contact">
                    <li onClick={() => setIsMobile(false)}>contact</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<i className="close">X</i>) : (<FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>)}
            </button>
        </div>
    )
    }

    export default Navbar

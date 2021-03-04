import React from "react";
import sara from "../images/sara.jpeg"

const AboutMe = () => {
    return (
        <div className="container py-5" id="about">
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap">
                    <img className="profile-img" src={sara} alt="Sara"/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h2 className="about-heading">about me</h2>
                <p>
                Full-Stack Web Developer with a Certificate from the University of Arizona with skills including Javascript, jQuery, Node, Express, React, MySql, and MongoDB among others. Sara’s passion for Software Development is rooted by her love of learning, her aptitude for problem solving and her aspiration to carry projects through to their completion… from back… to front.
                </p>
                <p>
                Sara currently resides in Phoenix, AZ but was born and raised in The Azores islands in the middle of the Atlantic. Multilingual, in addition to English, Sara also speaks Portuguese, French and Spanish.

                </p>
                <p>
                Other education worth noting includes a Social and Cultural Analysis Degree from Arizona State University and a Cinema Production degree from ESRA (École Supérieure de Réalisation Audiviosuelle) in Paris, France. These show that Sara has been always interested in the mystery of how things work… which is why she knows that she has found the right profession in Web Development… the ultimate puzzle

                </p>
            </div>
            </div>

        </div>
    )
}

export default AboutMe
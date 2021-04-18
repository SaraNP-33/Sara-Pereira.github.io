import React from 'react'

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <div className="d-flex justify-content-center my-5">
                <h2>experience</h2>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                       <h4>Nov 2020 - <span>Current</span></h4>
                        <h5>Tutor for Full Stack Coding Program at 2U</h5>
                        <p>.Supports Students during their program </p>
                        <p>.Manages personal roster and sessions</p>
                        <p>.Researchs and continues learning to give students the best support</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4>2019-2020</h4>
                        <h5>Case Manager at Lutheran Social Services</h5>
                        <p>Worked in temporary asylum shelters all over the Phoenix valley to deliver information to asylum seekers about their rights.</p>
                        <p>Did Know Your Rights seminars in the shelter in San Luis, Mexico for asylum seekers who had not yet crossed the border.</p>
                        <p>Created the contents in the Know your Rights package offered to every asylum seeker that I consulted in the shelters.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4>2016-2020</h4>
                        <h5>Producer at Inclusive Activism</h5>
                        <p>.Supported script writing/editing for diversity inclusion podcast</p>
                        <p>.Edited audio content</p>
                        <p>.Produced final podcast for publication</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4>2018-2019</h4>
                        <h5>Comunication Specialist at Next Generation Service Corps</h5>
                        <p>Created the informational website used to communicate with students.</p>
                        <p>Maintained and managed content of the website.</p>
                        <p>Created and managed the bi-weekly newsletter sent to all the students in the program.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4>2009-2009</h4>
                        <h5>Production Assistant Intern at Horizon Pictures</h5>
                        <p>.Managed content exposure to public and professional contests</p>
                        <p>.Solicited corp. to corp. relationships to arrange new production agreements</p>
                        <p>.Worked directly with editing team to ensure productions remained on schedule</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h4>2005-2007</h4>
                        <h5>Assistant Producer at L'Appart Bureau</h5>
                        <p>Prepared models and sets for photo shoots.</p>
                        <p>Organized runway fashion shows.</p>
                        <p>Coordinated media content and exposure for Paris based fashion design agency.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience

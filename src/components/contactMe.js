import React from 'react';
import './contactMe.css';
import theHub from "../assets/icons8-github.gif";
import mail from "../assets/icons8-gmail.gif";
import me from "../assets/tisI.jpg";
import resume from "../assets/RESUME 2025.pdf";
import resPic from "../assets/icons8-resume-100.png";

function ContactMe() {
    return (
        <div className="contactMeContainer">
            <p className="contactMeTitle">Hi There!</p>
            <img src={me} alt="me" className="me" />
            <p className="contactMeText">Hello, my name is Christian and I'm a full-stack web developer with a passion for creating beautiful, responsive web applications. I'm proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I'm also familiar with Python, Powershell, Zapier/Zapier CLI, Airtable and a whole suite of different tools and tricks! I'm currently seeking a full-time position as a web developer. If you're interested in working with me, feel free to reach out to me, and check out my ongoing projects on GitHub!</p>
            <div className="contactMeLinks">
                <a href="https://github.com/CP-1998" target="_blank"><img src={theHub} alt="theHub" className="theHub" /></a>
                <a href="mailto:christianbuildstheweb@gmail.com" target="_blank"><img src={mail} alt="mail" className="mail" /></a>
                <a href={resume} target="_blank"><img src={resPic} alt="resPic" className="resPic" /></a>
            </div>
        </div>

    )
}

export default ContactMe;
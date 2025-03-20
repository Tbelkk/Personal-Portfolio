import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects(){

    return(
        <div className="projects">
            <h2>Skills & Technologies</h2>
            <div className="skills">
                <div className="tech-container">
                    <div className="tech-card">
                        <p>Python</p>
                    </div>
                    <div className="tech-card">
                        <p>JavaScript</p>
                    </div>
                    <div className="tech-card">
                        <p>ReactJS</p>
                    </div>
                    <div className="tech-card">
                        <p>Postgres</p>
                    </div>
                    <div className="tech-card">
                        <p>C++</p>
                    </div>
                    <div className="tech-card">
                        <p>SQL</p>
                    </div>
                    <div className="tech-card">
                        <p>MongoDB</p>
                    </div>
                    <div className="tech-card">
                        <p>Java</p>
                    </div>
                    <div className="tech-card">
                        <p>Git</p>
                    </div>
                    <div className="tech-card">
                        <p>Github</p>
                    </div>
                    <div className="tech-card">
                        <p>NodeJS</p>
                    </div>
                    <div className="tech-card">
                        <p>ExpressJS</p>
                    </div>
                    <div className="tech-card">
                        <p>Firebase</p>
                    </div>
                    <div className="tech-card">
                        <p>SciKitLearn</p>
                    </div>
                    <div className="tech-card">
                        <p>TensorFlow</p>
                    </div>
                    <div className="tech-card">
                        <p>OpenCV</p>
                    </div>
                </div>
            </div>
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-image">
                        <img src="./portfolio.png" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>ClipCheck</h3>
                        <p>fsjehfejfef esjfsjf esfhsejf sfsjh fjs hfjshfsjf hjsfh jse</p>
                    </div>
                    <div className="project-footer">
                        <ul className="tech-stack">
                            <li>
                                JavaScript
                            </li>
                            <li>
                                ReactJS
                            </li>
                            <li>
                                NodeJS
                            </li>
                            <li>
                                ExpressJS
                            </li>
                        </ul>
                        <ul className="project-link">
                            <li>
                                <a className="contact-btn" href="#">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="./portfolio.png" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>Personal</h3>
                        <p>fsjehfejfef esjfsjf esfhsejf sfsjh fjs hfjshfsjf hjsfh jse</p>
                    </div>
                    <div className="project-footer">
                        <ul className="tech-stack">
                            <li>
                                JavaScript
                            </li>
                            <li>
                                ReactJS
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                        <ul className="project-link">
                            <li>
                                <a className="contact-btn" href="#">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="./portfolio.png" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>Personal Portfolio</h3>
                        <p>fsjehfejfef esjfsjf esfhsejf sfsjh fjs hfjshfsjf hjsfh jse</p>
                    </div>
                    <div className="project-footer">
                        <ul className="tech-stack">
                            <li>
                                JavaScript
                            </li>
                            <li>
                                ReactJS
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                        <ul className="project-link">
                            <li>
                                <a className="contact-btn" href="#">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="./portfolio.png" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>Personal Portfolio</h3>
                        <p>fsjehfejfef esjfsjf esfhsejf sfsjh fjs hfjshfsjf hjsfh jse</p>
                    </div>
                    <div className="project-footer">
                        <ul className="tech-stack">
                            <li>
                                JavaScript
                            </li>
                            <li>
                                ReactJS
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                        <ul className="project-link">
                            <li>
                                <a className="contact-btn" href="#">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects
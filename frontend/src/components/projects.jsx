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
                        <img src="/Personal-Portfolio/clipcheck.PNG" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>ClipCheck</h3>
                        <p>
                            A web application that allows users to submit video 
                            URLs for fact-checking. The system analyzes the 
                            content and provides verification results based 
                            on reliable fact checking APIs.
                        </p>
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
                                <a className="contact-btn" href="https://github.com/Tbelkk">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="/Personal-Portfolio/voice.jpeg" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>Virtual Voice Assistant</h3>
                        <p>
                            A Python-based virtual voice assistant that 
                            converts user speech to text, processes the 
                            request with AI to generate a response or 
                            execute a task, and replies using text-to-speech (TTS).
                        </p>
                    </div>
                    <div className="project-footer">
                        <ul className="tech-stack">
                            <li>
                                Python
                            </li>
                            <li>
                                Pycaw 
                            </li>
                            <li>
                                Speech_recognition
                            </li>
                            <li>
                                Pyttsx3 
                            </li>
                            <li>
                                Ollama
                            </li>
                        </ul>
                        <ul className="project-link">
                            <li>
                                <a className="contact-btn" href="https://github.com/Tbelkk">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="/Personal-Portfolio/Commit.png" alt="Personal Portfolio" className="resize commit"></img>
                    </div>
                    <div className="project-header">
                        <h3>Commit Analyzer</h3>
                        <p>
                            An AI-powered Git commit review tool that 
                            automatically analyzes your repository's 
                            commits and provides intelligent feedback 
                            on code quality, commit message effectiveness, 
                            and best practices.
                        </p>
                    </div>
                    <div className="project-footer">
                        <ul className="tech-stack">
                            <li>
                                Python
                            </li>
                            <li>
                                CustomTkinter
                            </li>
                            <li>
                                Threading
                            </li>
                            <li>
                                GitPython
                            </li>
                            <li>
                                Ollama
                            </li>
                        </ul>
                        <ul className="project-link">
                            <li>
                                <a className="contact-btn" href="https://github.com/Tbelkk/Commit-Review">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="/Personal-Portfolio/portfolio.png" alt="Personal Portfolio" className="resize"></img>
                    </div>
                    <div className="project-header">
                        <h3>Personal Portfolio</h3>
                        <p>
                            A personal portfolio website built 
                            with ReactJS to showcase projects, 
                            skills, and experiences with an 
                            interactive and responsive design.
                        </p>
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
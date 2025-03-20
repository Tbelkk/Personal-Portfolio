import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header(){
    return(
        <header>

            <div className="intro">
                <h3>Hello, I'm</h3>
                <h1>Tyler Belken</h1>
                <p>I'm a software developer attending the University of Texas at Dallas.</p>
                <ul>
                    <li>
                        <a className="contact-btn" href="#">
                            <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                            Github
                        </a>
                    </li>
                    <li>
                        <a className="contact-btn" href="#">
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a className="contact-btn" href="#">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                            Email
                        </a>
                    </li>
                    <li>
                        <a className="contact-btn" href="#">
                            <FontAwesomeIcon icon={faFile} className="contact-icon"/>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
            <div className="dark-mode">
                <a className="dark-mode-btn" href="#"><FontAwesomeIcon icon={faMoon} className="icon"/>Dark Mode</a>
            </div>
        </header>
    );
}

export default Header
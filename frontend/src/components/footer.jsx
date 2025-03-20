import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className="footer">
            <hr></hr>
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
    );
}

export default Footer
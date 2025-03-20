import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

function Header({ darkMode, setDarkMode }) {
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    const root = document.documentElement;
    
    if(darkMode) {
      root.style.setProperty('--bg-color', '#121212'); 
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--card-bg', '#00000033');
      root.style.setProperty('--highlight-color', '#00FF00');
      root.style.setProperty('--border-color', 'grey');
    } else {
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--text-color', 'black');
      root.style.setProperty('--card-bg', '#cccccc33');
      root.style.setProperty('--highlight-color', '#702963');
      root.style.setProperty('--border-color', 'grey');
    }
  }, [darkMode]);

  return(
    <header>
      <div className="intro">
        <h3>Hello, I'm</h3>
        <h1>Tyler Belken</h1>
        <p>I'm a software developer attending the University of Texas at Dallas.</p>
        <ul>
          <li>
            <a className="contact-btn" href="https://github.com/Tbelkk">
              <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
              Github
            </a>
          </li>
          <li>
            <a className="contact-btn" href="https://www.linkedin.com/in/tyler-belken-8baa15286/">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
              LinkedIn
            </a>
          </li>
          <li>
            <a className="contact-btn" href="mailto:tylerbelkenyt@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
              Email
            </a>
          </li>
          <li>
            <a className="contact-btn" href="/resume.pdf">
              <FontAwesomeIcon icon={faFile} className="contact-icon"/>
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="dark-mode">
        <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="icon"/>
          {darkMode ? "Light Mode": "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
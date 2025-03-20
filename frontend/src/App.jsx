import { useState } from "react";
import React from "react";
import Header from './components/header.jsx';
import ParticlesComponent from "./components/particles.jsx";
import Projects from "./components/projects.jsx";
import Experience from "./components/experience.jsx";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
      const savedMode = localStorage.getItem('darkMode');
  })

  return (  
    <> 
      <div>
        <ParticlesComponent className="particles-canvas" darkMode={darkMode}/>
      </div>
      <div className="main-format">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Experience/>
        <Projects/>
      </div>
  </>
  );
}

export default App;

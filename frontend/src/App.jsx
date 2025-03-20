import React from "react";
import Header from './components/header.jsx'
import ParticlesComponent from "./components/particles.jsx";
import Projects from "./components/projects.jsx"
import Experience from "./components/experience.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (  
    <> 
      <div>
        <ParticlesComponent className="particles-canvas"/>
      </div>
      <div className="main-format">
        <Header/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
  </>
  );
}

export default App;

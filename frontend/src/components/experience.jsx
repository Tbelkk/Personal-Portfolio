function Experience(){
      return (
        <div className="experience">
            <h1>Experience</h1>
            <div className="toggle">
                <button className="experience-btn">Experience</button>
                <button className="education-btn">Education</button>
            </div>
            <div className="timeline-container">
                <div className="timeline-experience">
                    <div className="experience-card">
                        <div className="dot-pad">
                            <div className="timeline-dot">
                                <img src="./public/dfr.jpg"></img>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <p>Feb 2025 - Current</p>
                            <h2>Dallas Formula Racing</h2>
                            <p>Software Team Member</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-experience">
                    <div className="experience-card">
                    <div className="dot-pad">
                            <div className="timeline-dot">
                                <img src="./public/acm.jpg"></img>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <p>Feb 2025 - Current</p>
                            <h2>Association Computing Machinery</h2>
                            <p>Mentee</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-experience">
                    <div className="experience-card">
                    <div className="dot-pad">
                            <div className="timeline-dot">
                                <img src="./public/moving.webp"></img>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <p>May 2022 - Current</p>
                            <h2>Carte Blanche Moving</h2>
                            <p>Mover</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-education">
                    
                </div>
            </div>
        </div>
    );
}

export default Experience
import { useState } from "react";

function Experience(){

        const [experienceBtn, setExperienceBtn] = useState(true);

        if(experienceBtn){

        }

        return (
        <div className="experience">
            <h1>Experience</h1>
            <div className="toggle">
                <button className={experienceBtn ? "experience-btn-active" : "experience-btn"} onClick={() => setExperienceBtn(true)}>Experience</button>
                <button className={experienceBtn ? "education-btn" : "education-btn-active"} onClick={() => setExperienceBtn(false)}>Education</button>
            </div>
            <div className="timeline-container">
                {experienceBtn && (
                    <>
                    <div className="timeline-experience">
                    <div className="experience-card">
                        <div className="dot-pad">
                            <div className="timeline-dot">
                                <img src="/Personal-Portfolio/dfr.jpg"></img>
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
                                <img src="/Personal-Portfolio/acm.jpg"></img>
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
                                <img src="/Personal-Portfolio/moving.webp"></img>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <p>May 2022 - Current</p>
                            <h2>Carte Blanche Moving</h2>
                            <p>Mover</p>
                        </div>
                    </div>
                </div>
                </>
                )}
                {!experienceBtn && (
                <>
                    <div className="timeline-education">
                        <div className="education-card">
                            <div className="dot-pad">
                                <div className="timeline-dot">
                                    <img src="/Personal-Portfolio/utd.PNG"></img>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <p>Expected Graduation - May 2028</p>
                                <h2>University Of Texas at Dallas</h2>
                                <p>Bachelor of Science in Computer Science</p>
                            </div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}

export default Experience
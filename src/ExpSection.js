import React, { useState,  } from 'react';
import { Link } from "react-scroll"

const ExperiencesSection = () => {
  const [selectedCompany, setSelectedCompany] = useState("Company A"); // Set the default as "Company A"

  const handleCompanyClick = (companyName) => {
    setSelectedCompany(companyName);
  };

  return (
    <section className="exp">
      <div className="section-content">
        <div className="content-wrapper">
          <div className="exp-text-wrapper">
            
            <h1 className="inside-text"></h1>
            <div className="button-list">
              <button
                className={`company-button ${selectedCompany === "Company A" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company A")}
              >
                NASA
              </button>
              <button
                className={`company-button ${selectedCompany === "Company B" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company B")}
              >
                UCR Research
              </button>
              <button
                className={`company-button ${selectedCompany === "Company C" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company C")} 
              >
                Design@UCR
              </button>
              <button
                className={`company-button ${selectedCompany === "Company D" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company D")} 
              >
                TBD
              </button>
            </div>
          </div>
          <div className="description-wrapper">
            
            {selectedCompany === "Company A" && (
              <p className="description">
              <p className="role">
                Mission Concept Academy @ <span className="role-heading">NASA</span>
              </p>
                May 2023 - Present                
                <p></p>
                • Engaged in the complex task of formulating and implementing mission concepts for NASA's Lucy Mission on Ceres with a $300 million budget while leading the engineering portion of the mission <br></br>
                • Received mentorship from NASA engineers, resulting in process optimization and streamlined project development
                <p></p>
                <span className="skills-heading">Skills:</span> Project Management, CAD, System Design
              </p>
              
            )}
            {selectedCompany === "Company B" && (
              <p className="description">
                <p className="role">
                  AI Research Intern @ <span className="role-heading">UC Riverside</span>
                </p>
                 August 2023 - Present
                 <p></p>
                 • Conducted in-depth research on counterfeit medication, contributing to a project to combat adulterated medications.
                 <br></br>
                 • Developed algorithms and implemented computer vision techniques to automatically identify and categorize sphere locations and colors on the CandyCodes.
                  <p></p>
                  <span className="skills-heading">Skills:</span> Python, Pytorch
                  
              </p>
            )}
            {selectedCompany === "Company C" && (
              <p className="description">
                <p className="role">
                  VP of Web Development @ <span className="role-heading">Design@UCR</span>
                </p>
                March 2023 - Present
                <p></p>
                • Developed and managed the official website for UC Riverside's UI/UX club utilizing Next.js and React.js
                <br></br>
                • Integrated third-party APIs and libraries to add features such as event calendars, social media feeds, and contact forms, enriching the website's functionality.
                <p></p>
                <span className="skills-heading">Skills:</span> Next,js, React.js, AWS
              </p>
            )}
            {selectedCompany === "Company D" && (
              <p className="description">
                <p className="role">
                  VP of Web Development @ <span className="role-heading">Design@UCR</span>
                </p>
                March 2023 - Present
                <p></p>
                • Developed and managed the official website for UC Riverside's UI/UX club utilizing Next.js and React.js
                <br></br>
                • Integrated third-party APIs and libraries to add features such as event calendars, social media feeds, and contact forms, enriching the website's functionality.
                <p></p>
                <span className="skills-heading">Skills:</span> Next,js, React.js, AWS
                <p></p>
              </p>
            )}
             <Link to="proj"smooth={true} offset={0} duration={600} className="exp-button">
              projects ⬇
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

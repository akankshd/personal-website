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
                className={`company-button ${selectedCompany === "Company Z" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company Z")}
              >
                Alaska Airlines
              </button>
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
              InternConnect
              </button>
              <button
                className={`company-button ${selectedCompany === "Company C" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company C")} 
              >
                Design@UCR
              </button>
              {/* <button
                className={`company-button ${selectedCompany === "Company D" ? 'active' : ''}`}
                onClick={() => handleCompanyClick("Company D")} 
              >
                S2025
              </button> */}
            </div>
          </div>
          <div className="description-wrapper">
          {selectedCompany === "Company Z" && (
              <p className="description">
              <p className="role">
                Software Engineer Intern @ <span className="role-heading">Alaska Airlines</span>
              </p>
                June 2024 - September 2024                
                <p></p>
  • Spearheaded the development of a check-in feature for Alaska Airlines' website and mobile app using <strong>React.js</strong> and <strong>Go</strong>, resulting
  in a 10% reduction in check-in time across <strong>30,000</strong> check-ins. <br></br>
  • Engineered the front-end for a new dynamic seat-selection map for Alaska Airlines' website using <strong>React.js</strong> and <strong>TypeScript</strong>,
  streamlining customer access to seat maps and contributing to a projected <strong>15%</strong> increase in seat selection revenue for Q3. <br></br>
  • Developed and optimized a flight status notification system using <strong>Node.js</strong> and AWS, improving real-time updates for customers
  and reducing notification delays by <strong>20%</strong>, enhancing the overall user experience on Alaska Airlines’ digital platforms. <br></br>
  • Developed an AI-powered chatbot for Alaska Airlines using LLMs, automating customer support tasks and reducing service
  workload by 25%.
<p></p>


                <span className="skills-heading">Tech Stack:</span>
<span className="backend"> Backend: Go, NodeJS, SQL, AWS</span>, 
<span className="frontend"> Frontend: ReactJS, VueJS, Typescript</span>
              </p>
              
            )}
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
                  Co-Founder @ <span className="role-heading">InternConnect</span>
                </p>
                 June 2024 - Present
                 <p></p>
                 • Developing a social media platform designed to help interns discover and enjoy exciting experiences in their temporary homes abroad.
                 <br></br>
                 • Building in React and React Native
                  <p></p>
                  <span className="skills-heading">Skills:</span> ReactJS, React Native, Typescript, NodeJS
                  
              </p>
            )}
            {selectedCompany === "Company C" && (
              <p className="description">
                <p className="role">
                  VP of Web Development @ <span className="role-heading">Design@UCR</span>
                </p>
                March 2023 - June 2024
                <p>
                  • Developed and managed the official website for UC Riverside's UI/UX club using Next.js and React.js – 
                  <a 
                  href="https://designatucr.com" 
                  target="_blank" 
                  style={{ color: 'gold', textDecoration: 'none' }}
                >
                  designatucr.com
                </a>
                </p>
                <span className="skills-heading">Skills:</span> Next,js, React.js
              </p>
            )}
            {/* {selectedCompany === "Company D" && (
              <p className="description">
                Summer 2025
              </p>
            )} */}
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

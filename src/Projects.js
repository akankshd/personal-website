import React from 'react';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 
const Projects = () => {
  return (
    
    <section className="proj">
        
      <div className="proj-heading">
        <h2>Stuff I've Built</h2>
      </div>
      <div className="proj-content">
        <div className="project-boxes">
          <div className="project-box">
            <p id="proj-name">Vibescope</p>
            <p>• Utilized Hume AI's algorithms and capabilities to accurately analyze sentiments expressed in comments, leveraging Python and Flask to build a server for seamless access to Hume.
            </p>
            <b></b>
            <p>• Implemented Google's YouTube API through a Node.js server hosted on AWS Lambda, enabling streamlined retrieval of comment data for specific videos</p>
            <b></b>
            <p>• Developed a user-friendly website interface in Svelte for YouTube video sentiment analysis, addressing challenges of latency and scalability through innovative approaches</p>
            <b></b>
            <p id="code">
                <a href="https://devpost.com/software/vibescope" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </p>
          </div>
          <div className="project-box">
            <p id="proj-name">Ecoinvest</p>
            <p>• Developed a comprehensive full-stack web application that provides stock traders with ESG (Environmental, Social, and Governance) data </p>
            <b></b>
            <p>• Successfully extracted and integrated environmental performance data from multiple REST APIS into the application </p>
            <p id="code">
                <a href="https://github.com/akankshd/ecoinvest2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </p>
          </div>
          <div className="project-box">
            <p id="proj-name">User Blog</p>
            <p>• Developed a full-stack web application using Javascript and React to create a fully functional and user-friendly blog </p>
            <b></b>
            <p>• Implemented user authentication capabilities with Firebase's real-time database and deployed using AWS amplify services</p>
            <p id="code">
                <a href="https://github.com/akankshd/blog" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </p>
          </div>
          <div className="project-box">
            <p id="proj-name">Portfolio Website</p>
            <p id="code">
                <a href="https://github.com/akankshd/personal-web/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;

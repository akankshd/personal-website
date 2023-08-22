import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll"; // enables smooth scrolling for user <link> component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 
import { faInstagram, faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import ExpSection from './ExpSection'
import Projects from './Projects'
function App() {

  return (
    <div>
      <div className="header">
        
        
        <nav>
          <ul>
            <li>
              <Link to="section my-box" smooth={true} offset={0} duration={600}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="exp" smooth={true} offset={0} duration={600}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="proj" smooth={true} offset={0} duration={600}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="intro">
        <h1 className="textIntro">Hi, I'm Akanksh</h1>
        <div className="social-icons">
          <a href="https://www.instagram.com/akanksh_d/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/akankshd3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/akankshsuhas/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />

          </a>
          <a href="https://github.com/akankshd" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
        <button class="resume-button" onclick="">
          <Link to="section my-box" smooth={true} offset={0} duration={600}>
            explore
          </Link>
        </button>
      </div>
      
    <div className="container">
  <section className="section my-box">
    <div className="section-content">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <h2 id="about">About Me</h2>
          <h1 className="inside-text">Nice to meet you!</h1>
          <p id="about-text">
            Hello, I'm Akanksh, presently in my second year at the University of California, Riverside. I'm working towards a career in software engineering, with a particular interest in machine learning and its applications in business. My aptitude for problem-solving has been evident from a young age, and every project I take on presents me with fresh challenges to overcome.
          </p>

        <p id="about-text">
          Beyond my technical pursuits, I have a passion for photography and exploring new destinations, nurturing my aspiration to eventually experience the world in its entirety.
        </p>
        <button class="resume-button" onclick="">
          <Link to="exp" smooth={true} offset={0} duration={600}>
            check out my experiences! ⬇
          </Link>
        </button>
        </div>
        <div className="image-wrapper">
          <img src="akanksh.jpg" alt="Your Image"/>
        </div>
      </div>
  </div>
    
</section>

    <ExpSection /> 
    <Projects />

  </div>

  </div>
    
  );
}


export default App;

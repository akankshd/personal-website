import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll"; // enables smooth scrolling for user <link> component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 
import { faInstagram, faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

// ...



function App() {
  // Get all the section elements
  const sections = document.querySelectorAll('.section');

  // Loop through each section
  sections.forEach(section => {
    // Add event listener for hover
    section.addEventListener('mouseenter', () => {
      section.classList.add('hovered');
    });

    // Add event listener for mouse leave
    section.addEventListener('mouseleave', () => {
      section.classList.remove('hovered');
    });
  });

  return (
    <div>
      <script src="https://kit.fontawesome.com/dbc9044b2e.js" crossorigin="anonymous"></script>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="section my-box" smooth={true} offset={0} duration={600}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} offset={-70} duration={600}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} offset={-70} duration={600}>
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
          <a href="mailto:adivy001@ucr.edu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '20px', height: '20px' }}>
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/akankshsuhas/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/akankshd" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
       <button class="resume-button">resume</button>

      </div>

    <div className="container">

  {/* creating the boxes here */}
  <section className="section my-box">
  <div className="section-content">
    <div className="content-wrapper">
      <div className="text-wrapper">
        <h2>About Me</h2>
        <h1 className="inside-text">Nice to meet you!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut purus in lacus consequat tristique vel et
          nisl. Nam et suscipit felis. Donec viverra, est ut dictum blandit, sapien magna faucibus nisi, sed faucibus nisl
          elit id mauris.
        </p>
      </div>
      <div className="image-wrapper">
        <img src="your-image.jpg" alt="Your Image" />
      </div>
    </div>
  </div>
</section>


  <section className="section">
    <div className="section-content">
      <h2>Experience</h2>
      <p>
        Curabitur semper tellus ac odio suscipit vehicula. Vestibulum id tortor in tellus lacinia rhoncus sed a risus.
        Sed rutrum augue eu orci bibendum, vel placerat sapien mattis. Vivamus sit amet fringilla nisi.
      </p>
    </div>
  </section>

  <section className="section">
    <div className="section-content">
      <h2>Education</h2>
      <p>
        Etiam eget nibh vel velit ullamcorper pretium vel sit amet velit. Nullam porttitor sapien vel arcu mollis
        hendrerit. Nunc sed neque id est dictum sollicitudin vel vel lacus. In ut erat in quam interdum pulvinar non ut
        velit.
      </p>
    </div>
  </section>
</div>

    </div>
  );
}


export default App;

import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll"; // enables smooth scrolling for user <link> component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 
import { faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function App() {

  return (
    <div>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link
                to="about-me"
                smooth={true}
                offset={-70}
                duration={600}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                offset={-70}
                duration={600}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                offset={-70}
                duration={600}
              >
                Education
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

        </div>
        {/* <img src="akanksh.jpg" alt="Your Name" /> */}
      </div>
    
      <section id="about-me">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut purus in lacus consequat tristique vel et
          nisl. Nam et suscipit felis. Donec viverra, est ut dictum blandit, sapien magna faucibus nisi, sed faucibus nisl
          elit id mauris.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>
          Curabitur semper tellus ac odio suscipit vehicula. Vestibulum id tortor in tellus lacinia rhoncus sed a risus.
          Sed rutrum augue eu orci bibendum, vel placerat sapien mattis. Vivamus sit amet fringilla nisi.
        </p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>
          Etiam eget nibh vel velit ullamcorper pretium vel sit amet velit. Nullam porttitor sapien vel arcu mollis
          hendrerit. Nunc sed neque id est dictum sollicitudin vel vel lacus. In ut erat in quam interdum pulvinar non ut
          velit.
        </p>
      </section>
    </div>
  );
}

export default App;

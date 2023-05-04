import './App.css';

function App() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
  }
  return (
    <div>
    <div className="header">
      <nav>
        <ul>
          <li><a href="#about-me" onClick={() => scrollToSection("about-me")}>About Me</a></li>
          <li><a href="#experience" onClick={() => scrollToSection("experience")}>Experience</a></li>
          <li><a href="#education" onClick={() => scrollToSection("education")}>Education</a></li>
        </ul>
      </nav>
    </div>
    <section id="about-me">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut purus in lacus consequat tristique vel et nisl. Nam et suscipit felis. Donec viverra, est ut dictum blandit, sapien magna faucibus nisi, sed faucibus nisl elit id mauris.</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>Curabitur semper tellus ac odio suscipit vehicula. Vestibulum id tortor in tellus lacinia rhoncus sed a risus. Sed rutrum augue eu orci bibendum, vel placerat sapien mattis. Vivamus sit amet fringilla nisi.</p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>Etiam eget nibh vel velit ullamcorper pretium vel sit amet velit. Nullam porttitor sapien vel arcu mollis hendrerit. Nunc sed neque id est dictum sollicitudin vel vel lacus. In ut erat in quam interdum pulvinar non ut velit.</p>
      </section>
    </div>
    
  );
}

export default App;


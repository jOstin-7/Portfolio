import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import './styles/index.css'
import './styles/display-mode.css'
import './styles/header.css'
import { useActiveSection } from "./jsx/highlight.jsx";
import useLightMode from "./jsx/light-mode.jsx";

function App() {
  const activeSection = useActiveSection();
    const { isLightMode, toggleMode } = useLightMode();
  return (
    <>
    {/*  */}
    {/* Header */}
      <div className="header">
        <div className="name">
          <a href="#home"> <span className="text-gray-800">JUSTIN.</span><span className="text-blue-500">DEV</span></a>
        </div>
        <div className="navbar">
          <a href="#about" className={`button ${activeSection === "about" ? "active" : ""}`}>
            <button>About</button>
          </a>
          <a href="#skills" className={`button ${activeSection === "skills" ? "active" : ""}`}>
            <button>Skills</button>
          </a>
          <a href="#services" className={`button ${activeSection === "services" ? "active" : ""}`}>
            <button>Services</button>
          </a>
          <a href="#contact" className={`button ${activeSection === "contact" ? "active" : ""}`}>
            <button>Contact</button>
          </a>
          
        </div>
        <div className="set_light_mode">
        <button className="mode" onClick={toggleMode}>
          <Sun className={`sun ${isLightMode ? "sun-set" : ""}`} />
          <Moon className={`moon ${isLightMode ? "moon-rise" : ""}`} />
        </button>
      </div>
      </div>
      {/* partitions */}
      <div className="partitions" id="home">
        home
      </div>
      <div className="partitions" id="about">
        about
      </div>
      <div className="partitions" id="skills">
        skills
      </div>
      <div className="partitions" id="services">
        services
      </div>
      <div className="partitions" id="contact">
        contact
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;

/*styles */
import './styles/header.css'
import './styles/display-mode.css'
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

/*functions */
import { useActiveSection } from "./Functions/highlight.jsx";
import useLightMode from "./Functions/light-mode.jsx";

function PageHeader() {
  const activeSection = useActiveSection();
  const { isLightMode, toggleMode } = useLightMode();
    return (
        <>
         {/* Header  */}
      <div className="header">
        <div className="name">
          <a href="#home"> <span className={`ease-in-out duration-400 ${isLightMode ? "text-white" : "text-gray-800"}`}>JUSTIN.</span><span className="text-blue-500">DEV</span></a>
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
            <button >Contact</button>
          </a>
          
        </div>
        
        <button className="button-mode" onClick={toggleMode}>
          <Sun  className={`sun-set  ${isLightMode ? "sun"   : ""}`} />
          <Moon className={`moon-rise ${isLightMode ? "moon" : ""}`} />
        </button>
      
      </div>
        
        </>);
}

export default PageHeader;
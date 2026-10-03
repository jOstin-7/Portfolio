/*styles */
import "./styles/header.css";
import "./styles/display-mode.css";
import { Sun, Moon } from "lucide-react";
import black from "./images/black.png";
import white from "./images/white.png";
/*functions */
import { useActiveSection } from "./Functions/highlight.jsx";

// Keep these ids identical (lowercase) to the ids inside each section component
const SECTIONS = [
  "home",
  "about",
  "skills",
  "services",
  "projects",
  "certificates",
];

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

function PageHeader({ isLightMode, toggleMode }) {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <div className="header">
      <div className="name">
        <a href="#home">
          <span className="flex items-center gap-1">
            <img
              src={isLightMode ? white : black}
              alt="Logo"
              className="h-10 w-10 ease-in-out duration-300"
            />
            <span
              className={`transition-colors ease-in-out duration-400 ${
                isLightMode ? "text-white" : "text-gray-800"
              }`}
            >
              JUSTIN.
            </span>
            <span className="text-blue-500">DEV</span>
          </span>
        </a>
      </div>

      <div
        className={`navbar ${isLightMode ? "bg-blue-950/80" : "bg-blue-600/80"}`}
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`button ${activeSection === id ? "active" : ""}`}
          >
            {label}
          </a>
        ))}
      </div>

      <button className="button-mode" onClick={toggleMode}>
        <Sun className={`sun-set ${isLightMode ? "sun" : ""}`} />
        <Moon className={`moon-rise ${isLightMode ? "moon" : ""}`} />
      </button>
    </div>
  );
}

export default PageHeader;
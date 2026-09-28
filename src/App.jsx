import "./styles/index.css";
import PageHeader from "./PageHeader.jsx";
import Contact from "./Contact.jsx";
import Pagefooter from "./Pagefooter.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";

/*functions */
import useLightMode from "./Functions/light-mode.jsx";
function App() {
  const { isLightMode, toggleMode } = useLightMode();

  return (
    <>
      {/*  */}
      {/* Page Header */}
      <PageHeader isLightMode={isLightMode} toggleMode={toggleMode} />
      {/* partitions */}
      <Home isLightMode={isLightMode} />
      <About isLightMode={isLightMode} />
      <div className="partitions" id="skills">
        skills
      </div>
      <div className="partitions" id="services">
        services
      </div>
      <div className="partitions" id="Projects">
        Projects
      </div>
      <div className="partitions" id="Certificates">
        certificates
      </div>
      <modal />
      <Contact isLightMode={isLightMode} />
      {/* Page Footer*/}
      <Pagefooter isLightMode={isLightMode} />
    </>
  );
}
export default App;

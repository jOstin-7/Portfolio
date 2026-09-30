import "./styles/index.css";
import PageHeader from "./PageHeader.jsx";
import Contact from "./Contact.jsx";
import Pagefooter from "./Pagefooter.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./skill.jsx";
import Services from "./services.jsx";

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
      <Skills isLightMode={isLightMode} />
      <Services isLightMode={isLightMode} />
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

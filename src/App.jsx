import "./styles/index.css";
import PageHeader from "./PageHeader.jsx";
import Contact from "./Contact.jsx";
import Pagefooter from "./Pagefooter.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./skill.jsx";
import Services from "./services.jsx";
import Projects from "./projects.jsx";
import Certificates from "./Certificates.jsx";

/*functions */
import useLightMode from "./Functions/light-mode.jsx";

function App() {
  const { isLightMode, toggleMode } = useLightMode();

  return (
    <>
      <PageHeader isLightMode={isLightMode} toggleMode={toggleMode} />

      <Home isLightMode={isLightMode} />
      <About isLightMode={isLightMode} />
      <Skills isLightMode={isLightMode} />
      <Services isLightMode={isLightMode} />
      <Projects isLightMode={isLightMode} />
      <Certificates isLightMode={isLightMode} />
      {/* <Modal /> */}
      <Contact isLightMode={isLightMode} />

      <Pagefooter isLightMode={isLightMode} />
    </>
  );
}

export default App;
import "./styles/index.css";
import PageHeader from "./PageHeader.jsx";
import Contact from "./Contact.jsx";
import Pagefooter from "./Pagefooter.jsx";
/*functions */
import useLightMode from "./Functions/light-mode.jsx";
  
import modal from "./modal.jsx";

function App() {

  const { isLightMode, toggleMode } = useLightMode();

  return (
    <>
      {/*  */}
      {/* Page Header */}
      <PageHeader 
        isLightMode={isLightMode}
        toggleMode={toggleMode}/>
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
      <modal />
      <Contact isLightMode={isLightMode}/>
      {/* Page Footer*/}
      <Pagefooter isLightMode={isLightMode}/>
      
    </>
  );
}
export default App;

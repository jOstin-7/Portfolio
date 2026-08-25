
import "./App.css";
import "./index.css";
import "./jsx/functions.jsx";
function App() {
  

  return (
    <>
      <html className="scroll-smooth">
        <div className="header">
         <div className="name">
               <a href="#home">Justin</a>
            </div>
          <div className="navbar">
              <a href="#about" className={`button ${
              activeSection === "about" ? "active" : ""
            }`} ><button >About</button></a>
              <a href="#skills" className={`button ${
              activeSection === "skills" ? "active" : ""
            }`} ><button>Skills</button></a>
              <a href="#services" className={`button ${
              activeSection === "services" ? "active" : ""
            }`} ><button>Services</button></a>
              <a href="#contact" className={`button ${
              activeSection === "contact" ? "active" : ""
            }`} ><button>Contact</button></a>
          </div>
        </div>
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
      </html>
    </>
  );
}

export default App;

import LetterGlitch from "./Functions/LetterGlitch.jsx";
import { useState, memo } from "react";
import Modal from "./Modal.jsx";
import "./styles/Home.css";

// Prevents the canvas from re-rendering when the modal opens/closes
const MemoLetterGlitch = memo(LetterGlitch);

function Home({ isLightMode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <MemoLetterGlitch
            glitchSpeed={60}
            centerVignette={true}
            outerVignette={false}
            smooth
            backgroundColor={`${isLightMode ? "#1e2939" : "#ffffff"}`}
          />
          {/* */}
        </div>
        <div className="Home_BG_color" style={{ opacity: isLightMode ? 0 : 1 }} aria-hidden="true" />
        <div className="Home_BG_color-dark" style={{ opacity: isLightMode ? 1 : 0 }} aria-hidden="true" />
        {/*color overlayd*/}
        <div className="Text_Body">
          <div className="greet">
            <span>Hi, I’m</span>
            <span className="text-blue-600 pl-2"> Justin Adrian Reboton</span>
          </div>
          <div className="pos"> BSIT Student • Aspiring Web Developer </div>
          <div className="desc">
            A BS Information Technology student at Laguna State Polytechnic
            University – Los Baños Campus, passionate about creating simple,
            functional, and responsive digital experiences while continuously
            learning and exploring new technologies.
          </div>
          <div className="CTA">
            <div className="more">
              <a href="#about">
                <button className={`CTA-Button ${isLightMode ? "  bg-blue-700 text-white " : "  bg-blue-100 text-blue-600 "} `}>
                  Explore More
                </button>
                {/**/}
              </a>
            </div>
            <div>
              {" "}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className={`CTA-Button ${isLightMode ? "  bg-blue-100 text-blue-600" : "bg-blue-700 text-white"} `}
              >
                Contact Me
              </button>
            </div>
            <Modal
              isLightMode={isLightMode}
              isOpen={open}
              onClose={() => setOpen(false)}
              title="Confirm action"
              footer={
                <>
                  <button onClick={() => setOpen(false)}>Close</button>
                </>
              }
            />
          </div>
          <div className="building">
            <span>Currently building:</span>
            <span className="text-blue-600 pl-2">
               Web applications • UI/UX • Database systems
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

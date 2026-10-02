import "./styles/index.css";
import "./styles/footer.css";

function Pagefooter({ isLightMode }) {
  return (
    <>
      <div className="footer">
        {/*Name Text*/}
        <div className="leftside">
          <div className="name-text">
            <div className="foot-name">
              <span
                className={`ease-in-out duration-400 ${isLightMode ? "text-white" : "text-gray-800"}`}
              >
                JUSTIN.
              </span>
              <span className="text-blue-500">DEV</span>
            </div>
            <span className="justify-between">
              A BS Information Technology student that develops web systems and
              programs
            </span>
            <div className="socialslinks">
              <a href="https://www.facebook.com/justin.reboton.1/" target="_blank" rel="noopener noreferrer"  className="block w-fit h-fit" > {/*to fix to work with night mode*/}
                <div className="facebook"></div>
              </a>
              <a href="https://github.com/jOstin-7" target="_blank" rel="noopener noreferrer" className="block w-fit h-fit"> {/*to fix to work with night mode*/}
                <div className="git"></div>
              </a>
              <a href="https://www.linkedin.com/in/justin-adrian-reboton-657a96435/" target="_blank" rel="noopener noreferrer" className="block w-fit h-fit"> {/*to fix to work with night mode*/}
                <div className="linkedin"></div>
              </a>
              <a href="https://discord.com/users/842769694086791168" target="_blank" rel="noopener noreferrer" className="block w-fit h-fit"> {/*to fix to work with night mode*/}
                <div className="discord"></div>
              </a>
            </div>
          </div>
        </div>
        {/*Navigation*/}
        <div className="rightside">
          <div className="navigate">
            <span className="navhead">Navigate to</span>
            <div className="navlinks">
              <a href="#home" className="navlink">
                Home
              </a>
              <a href="#about" className="navlink">
                About
              </a>
              <a href="#skills" className="navlink">
                Skills
              </a>
              <a href="#services" className="navlink">
                Services
              </a>
              <a href="#Projects" className="navlink">
                Projects
              </a>
              <a href="#certificates" className="navlink">
                Certificates
              </a>
            </div>
          </div>

          {/*Contact Information*/}
          <div className="contact-info">
            <span className="contact-head">Contact Information</span>
            <div className="contact-links">
                <a href="mailto:justinreboton98@gmail.com" className="email">
                  justinreboton98@gmail.com
                </a>
                <span className="contact">+63 945 860 0015</span>
                <span className="address">Los Baños Laguna, 4030, Philippines</span>
            </div>
          </div>
        </div>
      </div>

      {/*Copyright and Build with*/}
      <div className="cprt-build">
        <div className="rights">
          © 2026 Justin Adrian Reboton All rights reserved
        </div>
        <div className="build">Made with React and Tailwind CSS</div>
      </div>
    </>
  );
}

export default Pagefooter;

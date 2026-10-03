import "./styles/index.css";
import "./styles/footer.css";
import black from "./images/black.png";
import white from "./images/white.png";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { BookUser } from "lucide-react";
function Pagefooter({ isLightMode }) {
  return (
    <>
      <div className="footer">
        {/*Name Text*/}
        <div className="leftside">
          <div className="name-text">
            <div className="foot-name">
              <span className={`flex items-center gap-1 text-5xl`}>
                <img
                  src={isLightMode ? white : black}
                  alt="Logo"
                  className="h-15 w-15 ease-in-out duration-300"
                />
                <span
                  className={`transition-colors ease-in-out duration-400 ${isLightMode ? "text-white" : "text-gray-800"}`}
                >
                  JUSTIN.
                </span>
                <span className="text-blue-500">DEV</span>
              </span>
            </div>
            <span className="justify-between text-xl font-semibold ">
              A BS Information Technology student that <br />
              developsweb systems and programs
            </span>
            <div className="socialslinks">
              <a
                href="https://www.facebook.com/justin.reboton.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit h-fit"
              >
                {" "}
                {/*to fix to work with night mode*/}
                <div className={`w-10 h-10 bg-no-repeat bg-contain bg-center ${
                    isLightMode
                      ? "bg-[url('https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff')]"
                      : "bg-[url('https://img.icons8.com/?size=100&id=118467&format=png&color=162456')]"
                  }`}></div>
              </a>
              <a
                href="https://github.com/jOstin-7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit h-fit"
              >
                {" "}
                {/*to fix to work with night mode*/}
                <div
                  className={`w-10 h-10 bg-no-repeat bg-contain bg-center ${
                    isLightMode
                      ? "bg-[url('https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff')]"
                      : "bg-[url('https://img.icons8.com/?size=100&id=12599&format=png&color=162456')]"
                  }`}
                ></div>
              </a>
              <a
                href="https://www.linkedin.com/in/justin-adrian-reboton-657a96435/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit h-fit"
              >
                {" "}
                {/*to fix to work with night mode*/}
                <div className={`w-10 h-10 bg-no-repeat bg-contain bg-center ${
                    isLightMode
                      ? "bg-[url('https://img.icons8.com/?size=100&id=8808&format=png&color=ffffff')]"
                      : "bg-[url('https://img.icons8.com/?size=100&id=8808&format=png&color=162456')]"
                  }`}></div>
              </a>
              <a
                href="https://discord.com/users/842769694086791168"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit h-fit"
              >
                {" "}
                {/*to fix to work with night mode*/}
                <div className={`w-10 h-10 bg-no-repeat bg-contain bg-center ${
                    isLightMode
                      ? "bg-[url('https://img.icons8.com/?size=100&id=30888&format=png&color=ffffff')]"
                      : "bg-[url('https://img.icons8.com/?size=100&id=30888&format=png&color=162456')]"
                  }`}></div>
              </a>
            </div>
          </div>
        </div>
        {/*Navigation*/}
        <div className="rightside ">
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
              <span className="contact flex">
                <Mail className="pr-1 " />
                justinreboton98@gmail.com
              </span>
              <span className="contact flex">
                <BookUser />
                +63 945 860 0015
              </span>
              <span className="contact flex">
                <MapPin />
                Los Baños Laguna, 4030, Philippines
              </span>
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

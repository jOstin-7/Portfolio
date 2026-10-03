import "./styles/About.css";
import { Cpu } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { MapPin } from "lucide-react";
import me from "./images/me.jpg";


function About({ isLightMode }) {
  return (
    <>
      <div className="about_body" id="about">
        <div className="main_container">
          <span className="page_title">2 - About</span>
          <div className="content_container ">
            <div className="content_header">About Me</div>
            <div className="text_body ">
              <div className="divider">
                <div className="text ">
                  <div className="subheader">
                    Building, learning, and turning ideas into something useful.
                  </div>
                  <div className="main_text">
                    Hi, I am a 3rd year student at the Laguna state Polytechnic
                    University Los Baños Campus, currently taking my bachelors
                    degree on Information Technology.{" "}
                  </div>
                  <div className="main_text">
                    I enjoy things related to tech and creating websites that
                    are simple yet functional and responsive. I like
                    experimenting with different technologies and turning ideas
                    into something that people can actually use.
                  </div>
                  <div className="main_text">
                    As I continue my studies, I have had the opportunity to work
                    on different projects that have helped me improve my
                    programming, web development, and problem-solving
                    skills.{" "}
                  </div>
                  <div className="main_text">
                    Each project gives me something new to learn — whether it's
                    figuring out how a system works, improving a design, or
                    solving a problem in my code. I am still learning and
                    developing my skills, but I enjoy the process of building,
                    experimenting, and improving with every project I take on.
                  </div>
                </div>
                <div className="heads flex">
                  <div className="w-fit flex flex-col md:flex-row justify-center items-center ">
                    <div className="flex  w-1/2">
                      <div className={`about_card transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-950 " : "  bg-blue-300 "} `}>
                        <Cpu className={`sprite transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-800 " : "  bg-blue-400 "} `} />
                        <div className="container_text">
                          <div className="container_head">Focus</div>
                          <div className="container_body">Web Development</div>
                        </div>
                      </div>
                      <div className={`about_card transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-950 " : "  bg-blue-300 "} `}>
                        <NotebookPen className={`sprite transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-800 " : "  bg-blue-400 "} `}/>
                        <div className="container_text">
                          <div className="container_head">
                            Currently Learning
                          </div>
                          <div className="container_body">
                            React • Tailwind CSS• Backend Development
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex  w-1/2 ">
                      <div className={`about_card transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-950 " : "  bg-blue-300 "} `}>
                        <GraduationCap className={`sprite transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-800 " : "  bg-blue-400 "} `} />
                        <div className="container_text">
                          <div className="container_head">Education</div>
                          <div className="container_body">
                            3rd Year • BSIT LSPU–Los Baños
                          </div>
                        </div>
                      </div>
                      <div className={`about_card transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-950 " : "  bg-blue-300 "} `}>
                        <MapPin className={`sprite transition-colors ease-in-out duration-400 ${isLightMode ? "  bg-blue-800 " : "  bg-blue-400 "} `} />
                        <div className="container_text">
                          <div className="container_head">Based In</div>
                          <div className="container_body">Los Baños Laguna</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div >
                <img src={me} alt="Justin Adrian Reboton" width={540} height={720} loading="lazy" decoding="async" className="imgs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

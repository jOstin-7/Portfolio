import "./styles/Skills.css";

function Skills({ isLightMode }) {
  return (
    <>
      <div
        className={`skills_body 
      `}
        id="skills"
      >
        <div
          className="main_container
        "
        >
          <span className="page_title">3 - Skills</span>
          <div className="content_container">
            <div className="content_header">What I Work With</div>
            <div className="main_text section_intro">
              A collection of technologies and practical skills I've developed
              through coursework, projects, and personal exploration.
            </div>
            <div className="skills">
              <div className="flex flex-col md:flex-row justify-center items-center flex-wrap sm:gap-4">
                <div
                  className={`skill_container ${isLightMode ? "bg-gray-700" : "bg-blue-50"}`}
                >
                  <div className="skilltitle">Web Development</div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      HTML
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      CSS
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Javascript
                    </div>
                  </div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      React
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      PHP
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Tailwind
                    </div>
                  </div>
                  <div className="skill_text">
                    Building responsive and functional websites and web
                    applications with a focus on clean interfaces and user
                    experience.{" "}
                  </div>
                </div>
                <div
                  className={`skill_container ${isLightMode ? "bg-gray-700" : "bg-blue-50"}`}
                >
                  <div className="skilltitle lg:h-28">Database Systems</div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      MySQL
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      MariaDB
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      SQL
                    </div>
                  </div>
                  <div className="skill_list"></div>
                  <div className="skill_text">
                    Designing, managing, and connecting databases to
                    applications for organized and reliable data
                    management.{" "}
                  </div>
                </div>
                <div
                  className={`skill_container ${isLightMode ? "bg-gray-700" : "bg-blue-50"}`}
                >
                  <div className="skilltitle">Networking</div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Lan Configuration
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      IP Addressing
                    </div>
                  </div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Network Troubleshooting
                    </div>
                  </div>
                  <div className="skill_text">
                    Understanding and configuring basic computer networks,
                    network devices, and communication protocols.{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-4">
                <div
                  className={`skill_container ${isLightMode ? "bg-gray-700" : "bg-blue-50"}`}
                >
                  <div className="skilltitle">IT Support</div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      System Maintenance
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      PC Assembly
                    </div>
                  </div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Hardware Troubleshooting
                    </div>
                  </div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Software Troubleshooting
                    </div>
                  </div>
                  <div className="skill_text">
                    Troubleshooting common hardware, software, and operating
                    system issues to keep systems functional and reliable.{" "}
                  </div>
                </div>
                <div
                  className={`skill_container ${isLightMode ? "bg-gray-700" : "bg-blue-50"}`}
                >
                  <div className="skilltitle">Photo & Video Editing</div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Adobe Photoshop
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Canva
                    </div>
                  </div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Davinci Resolve
                    </div>
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Transitions
                    </div>
                  </div>
                  <div className="skill_list">
                    <div
                      className={`skill ${isLightMode ? "bg-blue-950" : " bg-blue-200"}`}
                    >
                      Photo Manipulation
                    </div>
                  </div>
                  <div className="skill_text">
                    Creating and editing visual content for digital projects,
                    presentations, social media, and personal projects.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

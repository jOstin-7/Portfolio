import { MonitorCog } from "lucide-react";
import { CodeXml } from "lucide-react";
import { PencilSparkles } from "lucide-react";
import { Network } from "lucide-react";
import "./styles/services.css";

function Services({ isLightMode }) {
  return (
    <div className="services_body" id="services">
      <div className="main_container">
        <span className="page_title">4 - services</span>
        <div className="content_container">
          <div className="content_header">My Services</div>
          <div className="main_text w-fit md:w-1/3 ">
            Services I provide outside of school, where I apply the skills I've
            developed through my studies, personal projects, and hands-on
            experience.
          </div>
          <div className="items_container">
            <div className="up_container">
              <div
                className={`service_container  h-170 ${
                  isLightMode
                    ? " border-gray-500 hover:border-gray-200 bg-gray-700 "
                    : " border-gray-500 hover:border-blue-950 bg-blue-50  "
                }`}
              >
                <div className="title_container">
                  <div>
                    <MonitorCog className="icon" />
                  </div>
                  <div className="title_header_container">
                    <span className="title">PC & laptop Services</span>
                    <span className="subtitle">
                      Helping with hardware and software issues, PC cleaning and
                      maintenance, device setup, and PC building.
                    </span>
                  </div>
                </div>
                <div className="services_container">
                  <div className="left_container">
                    <div className="service_title mt-6.5">
                      Maintenance and Cleaning
                    </div>
                    <div className="service">
                      <span className="service_text">
                        - Internal dust and debris removal
                      </span>
                      <span className="service_text">
                        - Fan and heatsink cleaning
                      </span>
                      <span className="service_text">
                        - Keyboard and peripheral cleaning
                      </span>
                      <span className="service_text">
                        - Thermal paste replacement
                      </span>
                      <span className="service_text">- Cable management</span>
                      <span className="service_text">
                        - Basic hardware inspection
                      </span>
                      <span className="service_text">
                        - System performance checks
                      </span>
                    </div>

                    <div className="service_title mt-5">
                      Pc Building and Peripheral Modding
                    </div>
                    <div className="service">
                      <span className="service_text">- PC Assembly</span>
                      <span className="service_text">
                        - Mechanical Keyboard Modding
                      </span>
                    </div>
                  </div>
                  <div className="right_container">
                    <div className="service_title">
                      Operating System and Software Setup
                    </div>
                    <div className="service">
                      <span className="service_text">
                        - Windows installation & setup
                      </span>
                      <span className="service_text">
                        - Driver installation
                      </span>
                      <span className="service_text">
                        - System configuration
                      </span>
                      <span className="service_text">
                        - Software & application installation
                      </span>
                      <span className="service_text">
                        - System optimization
                      </span>
                      <span className="service_text">
                        - Windows reformatting
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`service_container  h-170 ${
                  isLightMode
                    ? " border-gray-500 hover:border-gray-200 bg-gray-700"
                    : " border-gray-500 hover:border-blue-950 bg-blue-50 shadow-gray-900/20 hover:shadow-gray-900/90"
                }`}
              >
                <div className="title_container">
                  <div> 
                    <CodeXml className="icon" />
                  </div>
                  <div className="title_header_container">
                    <span className="title">Web Development</span>
                    <span className="subtitle">
                      Helping with front-end development, basic CRUD systems,
                      and database management.
                    </span>
                  </div>
                </div>
                <div className="services_container">
                  <div className="left_container">
                    <div className="service_title">Front-End Development</div>
                    <div className="service">
                      <span className="service_text">
                        - Responsive website development
                      </span>
                      <span className="service_text">- HTML & CSS</span>
                      <span className="service_text">- JavaScript</span>
                      <span className="service_text">- React & Tailwind</span>
                      <span className="service_text">
                        - Basic website customization
                      </span>
                      <span className="service_text">
                        - User interface implementation
                      </span>
                    </div>

                    <div className="service_title mt-5">
                      CRUD System Development
                    </div>
                    <div className="service">
                      <span className="service_text">
                        - Create, Read, Update & Delete systems
                      </span>
                      <span className="service_text">
                        - Basic form development
                      </span>
                      <span className="service_text">
                        - Data input and management
                      </span>
                      <span className="service_text">
                        - Basic system functionality
                      </span>
                    </div>
                  </div>
                  <div className="right_container">
                    <div className="service_title">Database Management</div>
                    <div className="service">
                      <span className="service_text">- Database setup</span>
                      <span className="service_text">
                        - Database structure and organization
                      </span>
                      <span className="service_text">- Data management</span>
                      <span className="service_text">
                        - CRUD database integration
                      </span>
                      <span className="service_text">
                        - System optimization
                      </span>
                      <span className="service_text">
                        - Basic database maintenance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="low_container">
              <div
                className={`service_container  h-105 ${isLightMode ? 
                " border-gray-500 hover:border-gray-200 bg-gray-700" : 
                " border-gray-500 hover:border-blue-950 bg-blue-50 "}`}
              >
                <div className="title_container">
                  <div>
                    <PencilSparkles className="icon" />
                  </div>
                  <div className="title_header_container">
                    <span className="title">Photo and Video Editing</span>
                    <span className="subtitle">
                      Helping with photo enhancement, video editing, and basic
                      visual content preparation.
                    </span>
                  </div>
                </div>
                <div className="services_container">
                  <div className="left_container">
                    <div className="service_title mt-6.5">Photo Editing</div>
                    <div className="service">
                      <span className="service_text">
                        - Color and lighting adjustment
                      </span>
                      <span className="service_text">- Background removal</span>
                      <span className="service_text">
                        - Image cropping and resizing
                      </span>
                      <span className="service_text">
                        - Basic photo enhancement
                      </span>
                      <span className="service_text">
                        - Simple graphic adjustments
                      </span>
                    </div>
                  </div>
                  <div className="right_container">
                    <div className="service_title ">
                      Operating System and Software Setup
                    </div>
                    <div className="service">
                      <span className="service_text">
                        - Windows installation & setup
                      </span>
                      <span className="service_text">
                        - Driver installation
                      </span>
                      <span className="service_text">
                        - System configuration
                      </span>
                      <span className="service_text">
                        - Software & application installation
                      </span>
                      <span className="service_text">
                        - System optimization
                      </span>
                      <span className="service_text">
                        - Windows reformatting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`service_container  h-105 ${isLightMode ? 
                " border-gray-500 hover:border-gray-200 bg-gray-700" : 
                " border-gray-500 hover:border-blue-950 bg-blue-50 "}`}
              >
                <div className="title_container">
                  <div>
                    <Network className="icon" />
                  </div>
                  <div className="title_header_container">
                    <span className="title">Networking</span>
                    <span className="subtitle">
                      Helping with photo enhancement, video editing, and basic
                      visual content preparation.
                    </span>
                  </div>
                </div>
                <div className="services_container">
                  <div className="left_container">
                    <div className="service_title">
                      Network Setup & Configuration
                    </div>
                    <div className="service">
                      <span className="service_text">
                        - Router and Wi-Fi setup
                      </span>
                      <span className="service_text">
                        - Network device configuration
                      </span>
                      <span className="service_text">- Basic LAN setup</span>
                      <span className="service_text">
                        - IP address configuration
                      </span>
                      <span className="service_text">
                        - Network sharing setup
                      </span>
                    </div>
                  </div>
                  <div className="right_container">
                    <div className="service_title">Network Maintenance</div>
                    <div className="service">
                      <span className="service_text">
                        - Basic network diagnostics
                      </span>
                      <span className="service_text">
                        - Network device inspection
                      </span>
                      <span className="service_text">
                        - Cable and connection checking
                      </span>
                      <span className="service_text">
                        - Router configuration and maintenance
                      </span>
                      <span className="service_text">
                        - Basic network security configuration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;

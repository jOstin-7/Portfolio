import "./styles/index.css";
import "./styles/contact.css";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal.jsx";

function Contact({ isLightMode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/*  */}
      <div
        className={`contact-container transition-colors ease-in-out duration-400 ${isLightMode ? "contact-container-dark" : ""}`}
      >
        <div className="worktogether">
          <span className="text-blue-600">Lets Work</span>
          Together!
        </div>
        <div className="idea-container ">
          <div className={`contact-text border-1 ease-in-out duration-400 ${isLightMode ? "border-gray-600" : "border-gray-300"}`}>
            <span className="idea ">
              <div className="flex flex-row mb-4">
                <span className=" bg-blue-200 justify-center items-center rounded-xl w-30 h-15 px-2 mt-2" >
                  <Mail className=" text-blue-800 w-25 h-15 " />
                </span>
                <span className="pl-4 mt-2">
                  Do you have an idea or need some technical help, or just want to say
                  Hi? I'd be happy to hear from you.
                </span>
              </div>
            </span>

            {/*</div>
          <div className="contactcontainer">*/}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="contact-button"
            >
              <Send className="h-16 w-16 pr-6 border-r-2" />{" "}
              <span className="pl-5">Contact Me</span>
              <MoveRight className="h-16 w-25 pl-4"/>
            </button>
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
        </div>
      </div>
    </>
  );
}
export default Contact;

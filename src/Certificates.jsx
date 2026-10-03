import AccordionGallery from "./AccordionGallery.jsx";
import cert1 from "./images/cert1.png";
import cert2 from "./images/cert2.png";
import cert3 from "./images/cert3.png";
import cert4 from "./images/cert4.png";
import cert5 from "./images/cert5.png";
import cert6 from "./images/cert6.png";
import cert7 from "./images/cert7.jpg";
import cert8 from "./images/cert8.jpg";
import cert9 from "./images/cert9.jpg";

import { useEffect, useState } from "react";

const items = [
  { image: cert1, label: "Certificate of Completion — i-Leap  Program Work Immersion, Torres Tech", link: "#" },
  { image: cert2, label: "Certificate of Excellence — Best In Program Prototype, Torres Tech", link: "#" },
  { image: cert3, label: "Computer Systems Servicing NCII, TESDA ", link: "#" },
  { image: cert4, label: "Certificate of Excellence — Team Excellence Award, Torres Tech", link: "#" },
  { image: cert5, label: "Certificate of Excellence — Best In  Presentation, Torres Tech", link: "#" },
  { image: cert6, label: "SyenSaya TechnoForum — Coding Conscience, UPLB", link: "#" },
  { image: cert7, label: "Certificate of Appreciation — Volunteer CCS WEEK 2025, LSPU-LB", link: "#" },
  { image: cert8, label: "Certificate of Participation — CCS Seminar 2026 - AI with Integrity: Ethical Use of Generative AI in ICT Programs, LSPU-LB", link: "#" },
  { image: cert9, label: "Certificate of Appreciation — CCS Seminar 2025 - Role of Technology in Sustainable Development, LSPU-LB", link: "#" },
];

const getSize = () => {
  const w = window.innerWidth;
  return { isMobile: w < 768, isTablet: w >= 768 && w < 1024 };
};

function Certificates({ isLightMode }) {
  const [{ isMobile, isTablet }, setSize] = useState(getSize);
  const [selected, setSelected] = useState(null); // NEW: active certificate

  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // NEW: Escape to close + lock page scroll while modal is open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="h-fit w-full partitions" id="certificates">
      <div className="main_container">
        <span className="page_title">6 - Certifications</span>
        <div className="content_container">
          <div className="content_header">My Certificates and Participation</div>
          <div className="main_text section_intro">
            A collection of certifications, training, events, and activities
            that reflect my continuous learning and involvement in the IT field.
          </div>
          <div className="pt-2">
            <AccordionGallery
              items={items}
              onItemClick={(item, e) => {      // NEW
                e?.preventDefault();           // stops the "#" link jumping to top
                setSelected(item);
              }}
              className={`p-3 py-4 sm:p-8 sm:py-10 rounded-3xl md:rounded-4xl ease-in-out duration-400 shadow-2xl ${isLightMode ? "bg-gray-600" : "bg-blue-50"}`}
              defaultIndex={3}
              expandRatio={0.6}
              trigger="hover"
              accentColor="#ffffff"
              overlayColor="#060010"
              textColor="#ffffff"
              grayscale
              showLabels
              duration={1.2}
              ease="expo.out"
              parallax={1.5}
              tilt={0}
              stagger={0.0}
              height={isMobile ? 380 : isTablet ? 480 : 580}
              gap={isMobile ? 10 : 20}
              radius={7}
              orientation={isMobile ? "vertical" : "horizontal"}
            />
          </div>
        </div>
      </div>

      {/* NEW: modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.label}
        >
          <div
            className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white text-xl leading-none text-black shadow"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.label}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-white">{selected.label}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
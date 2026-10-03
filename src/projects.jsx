import { useEffect, useState } from "react";
import DepthCarousel from "./DepthCarousel";

import proj1 from "./images/proj1.png";
import proj2 from "./images/proj2.png";
import proj3 from "./images/proj3.jpg";

const items = [
  {
    image: proj1,
    alt: "One",
    title: "LSPU-LB Admission System",
    caption: "A student admission portal where new incoming college students of LSPU-LB can submit their admission requirements. Features include secure and encrypted login, dynamic tables with full crud functionality as well as an admin dashboard to manage applicant data",
  },
  {
    image: proj2,
    alt: "Two",
    title: "Media Club Website",
    caption: "A news/media website build for Colegio de Los Baños very own media based organization, Media Club. staff are able to manage news articles while users can access and read published content. it has role-based access from contributors, editors and also administrators.",
  },
  {
    image: proj3,
    alt: "Three",
    title: "Hobby Track",
    caption: "A mobile App developed using android Studio where Java is the primary programming language. It is made so that users can Track and manage their habits through daily check-ins, tracks progress and gives reminders. ",
  },
];

// Tracks the viewport so the carousel's geometry can change by breakpoint.
function useViewportWidth() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

// DepthCarousel already scales itself to fit its container width and the
// window height. These presets just give it a card shape and stack spacing
// that suit each screen size, so it doesn't shrink to a sliver on phones.
function getCarouselConfig(w) {
  if (w < 640) {
    return {
      cardWidth: 720,
      cardHeight: 520,
      depth: 140,
      spread: 110,
      tilt: 8,
      perspective: 1000,
      visibleCards: 2,
      blur: 6,
      radius: 16,
    };
  }
  if (w < 1024) {
    return {
      cardWidth: 900,
      cardHeight: 480,
      depth: 160,
      spread: 180,
      tilt: 10,
      perspective: 1100,
      visibleCards: 3,
      blur: 8,
      radius: 18,
    };
  }
  return {
    cardWidth: 1200,
    cardHeight: 660,
    depth: 180,
    spread: 220,
    tilt: 10,
    perspective: 1150,
    visibleCards: 4,
    blur: 10,
    radius: 18,
  };
}

function Projects() {
  const viewportWidth = useViewportWidth();
  const carousel = getCarouselConfig(viewportWidth);

  // Fluid type: grows with whichever is smaller, viewport width or height,
  // so text never overflows on short or narrow screens.
  const headerStyle = {
    fontSize: "clamp(1.5rem, min(4vw, 7vh), 3.5rem)",
    lineHeight: 1.1,
  };
  const textStyle = {
    fontSize: "clamp(0.875rem, min(1.4vw, 2.4vh), 1.25rem)",
    lineHeight: 1.6,
  };
  const titleStyle = {
    fontSize: "clamp(0.75rem, min(1.2vw, 2vh), 1rem)",
  };

  return (
    <div className="h-fit w-full overflow-x-hidden" id="projects">
      <div className="main_container">
        <span className="page_title" style={titleStyle}>
          5 - Projects
        </span>

        <div className="content_container">
          <div className="content_header" style={headerStyle}>
            Things I've Built
          </div>

          <div
            className="main_text w-full sm:w-3/4 lg:w-1/2 xl:w-1/3"
            style={textStyle}
          >
            Projects I've worked on throughout my studies and personal
            learning, each giving me an opportunity to build, experiment, and
            improve.
          </div>
          <div className="mx-auto mt-[2vh] w-full max-w-[1700px]">
            <DepthCarousel
              items={items}
              {...carousel}
              tiltDirection="right"
              falloff={0.19}
              autoplay
              loop
              tint="#05060a"
              duration={700}
              ease="power3.out"
              autoplayDelay={3200}
              showControls
              showIndicators
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
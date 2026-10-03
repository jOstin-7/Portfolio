import { useState, useEffect } from "react";

export function useActiveSection(sectionIds, initial = sectionIds[0]) {
  const [activeSection, setActiveSection] = useState(initial);
  const key = sectionIds.join(",");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        // a section becomes active when it crosses the middle of the viewport
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeSection;
}
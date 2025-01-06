import { useEffect, useState } from "react";

export const useChangeColor = () => {
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setIsDarkSection(entry.target.classList.contains("dark-section"));
          }
        });
      },
      {
        root: null,
        threshold: .9,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return { isDarkSection };
};

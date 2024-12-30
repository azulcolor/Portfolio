import { useEffect, useState } from "react";

export const useChangeColor = () => {
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry) {
              // Cambia el color del header según la clase de la sección
              setIsDarkSection(entry.target.classList.contains("dark-section"));
          }
        });
      },
      {
        root: null, // Observa en el viewport completo
        threshold: .6, // Asegúrate de que la sección ocupa al menos el 90% del viewport
      }
    );

    // Observa todas las secciones
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return { isDarkSection };
};

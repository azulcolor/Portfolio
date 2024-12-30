import { useEffect, useState } from "react";

export const useChangeColor = () => {
    const [isDarkSection, setIsDarkSection] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          // Detectar las secciones visibles
          const sections = document.querySelectorAll("section");
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isFullyVisible =
              rect.top <= 0 && rect.bottom >= window.innerHeight;
    
            // Cambiar el estado si la sección está completamente visible
            if (isFullyVisible) {
              setIsDarkSection(section.classList.contains("dark-section"));
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    

      return {isDarkSection}
}
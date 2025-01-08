import { useEffect, useState } from "react";

export const useCursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState("w-8 h-8");
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.classList.contains("header-list__button")) {
        setCursorSize("w-0 h-0");

        return;
      }

      if (target.classList.contains("project-image__container")) {
        setCursorSize("w-24 h-12 translate-x-6");
        setCursorText("VIEW");
        return;
      }

      setCursorSize("w-12 h-12");
    };

    const handleMouseLeave = () => {
      setCursorSize("w-8 h-8");
      setCursorText("");
    };

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { cursorPosition, cursorSize, cursorText };
};

"use client";

import { RoutesList, ResumeButton } from "./components";
import { useChangeColor } from './hooks/useChangeColor'

export const Header = () => {
  const { isDarkSection } = useChangeColor();

  return (
    <header
      className={`header-container transition-colors ${isDarkSection ? "text-gray-200" : "text-black"}`}
    >
      <ul className="header-list">
        <RoutesList />
        <li>
          <ResumeButton isDarkSection={isDarkSection} />
        </li>
      </ul>
    </header>
  );
};

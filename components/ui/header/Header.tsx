"use client";

import { ResumeButton } from "./components";
import { RoutesList } from "./components/RoutesList";
import { useChangeColor } from "./hook";

export const Header = () => {
  const { isDarkSection } = useChangeColor()

  return (
    <header className={`header-container transition-colors ${isDarkSection ? "text-gray-200" : "text-black"}`}>
      <ul className="header-list">
        <RoutesList />
        <li>
          <ResumeButton isDarkSection={isDarkSection} />
        </li>
      </ul>
    </header>
  );
};

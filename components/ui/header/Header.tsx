"use client";

import { Routes } from "@/types";
import Link from "next/link";
import { ResumeButton } from "./components/ResumeButton";
import { useChangeColor } from "./hook";

interface Props {
  routes: Routes;
}

export const Header = ({ routes }: Props) => {
  const { isDarkSection } = useChangeColor();

  return (
    <header className={`header-container transition-colors ${isDarkSection && "text-gray-200"}`}>
      <ul className="header-list">
        {routes.map((route) => (
          <li key={route.route} className="header-list__routes">
            <Link href={route.route}>{route.name}</Link>
          </li>
        ))}
        <li>
          <ResumeButton isDarkSection={isDarkSection} />
        </li>
      </ul>
    </header>
  );
};

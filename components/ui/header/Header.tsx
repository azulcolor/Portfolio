import { Routes } from "@/types";
import Link from "next/link";
import { ResumeButton } from "./components/ResumeButton";

interface Props {
  routes: Routes;
}

export const Header = ({ routes }: Props) => {
  return (
    <header className="header-container">
      <ul className="header-list">
        {routes.map((route) => (
          <li key={route.route} className="header-list__routes">
            <Link href={route.route}>{route.name}</Link>
          </li>
        ))}
        <li>
          <ResumeButton />
        </li>
      </ul>
    </header>
  );
};

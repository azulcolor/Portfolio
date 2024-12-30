import { routes } from "@/constants";
import Link from "next/link";

export const RoutesList = () => {
  return (
    <>
      {routes.map((route) => (
        <li key={route.route} className="header-list__routes">
          <Link href={route.route}>{route.name}</Link>
        </li>
      ))}
    </>
  );
};

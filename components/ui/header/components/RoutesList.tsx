import { routes } from "@/constants";
import { SmoothScrollLink } from "../../SmoothScrollLink";

export const RoutesList = () => {
  return (
    <>
      {routes.map((route) => (
        <li key={route.route} className="header-list__routes">
          <SmoothScrollLink href={route.route}>{route.name}</SmoothScrollLink>
        </li>
      ))}
    </>
  );
};

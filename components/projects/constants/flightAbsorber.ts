import expired_mobile from "@/public/images/projects/flightAbsorber/expired_mobile.webp";
import cupon_status_desktop from "@/public/images/projects/flightAbsorber/cupon_status_desktop.webp";
import change_password_desktop from "@/public/images/projects/flightAbsorber/change_password_desktop.webp";
import expired_desktop from "@/public/images/projects/flightAbsorber/expired_desktop.webp";
import { Images, ProjectData } from "../types";

const images: Images[] = [
  {
    name: "expiredMobile",
    imagePath: expired_mobile,
  },
  {
    name: "cuponStatusDesktop",
    imagePath: cupon_status_desktop,
  },
  {
    name: "changePasswordDesktop",
    imagePath: change_password_desktop,
  },
  {
    name: "expiredDesktop",
    imagePath: expired_desktop,
  },
];

export const flightAbsorber: ProjectData = {
  name: "Flight Absorber",
  slug: "flightAbsorber",
  year: "2022",
  images,
};

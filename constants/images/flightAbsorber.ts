import expired_mobile from "@/public/images/projects/flightAbsorber/expired_mobile.webp";
import cupon_status_desktop from "@/public/images/projects/flightAbsorber/cupon_status_desktop.webp";
import change_password_desktop from "@/public/images/projects/flightAbsorber/change_password_desktop.webp";
import expired_desktop from "@/public/images/projects/flightAbsorber/expired_desktop.webp";
import { Images, ProjectType } from "@/types";

export const flightAbsorberImages: Images[] = [
  {
    name: "expiredMobile",
    projectType: ProjectType.MOBILE,
    imagePath: expired_mobile,
  },
  {
    name: "cuponStatusDesktop",
    projectType: ProjectType.DESKTOP,
    imagePath: cupon_status_desktop,
  },
  {
    name: "changePasswordDesktop",
    projectType: ProjectType.DESKTOP,
    imagePath: change_password_desktop,
  },
  {
    name: "expiredDesktop",
    projectType: ProjectType.DESKTOP,
    imagePath: expired_desktop,
  },
];



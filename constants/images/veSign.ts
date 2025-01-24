import light_dashboard_clients from "@/public/images/projects/veSign/light_dashboard_clients.webp";
import light_login from "@/public/images/projects/veSign/light_login.webp";
import light_sign_document from "@/public/images/projects/veSign/light_sign_document.webp";
import light_sign_draw from "@/public/images/projects/veSign/light_sign_draw.webp";
import { Images, ProjectType } from "@/types";

export const veSignImages: Images[] = [
  {
    name: "lightDashboardClients",
    projectType: ProjectType.DESKTOP,
    imagePath: light_dashboard_clients,
  },
  {
    name: "lightLogin",
    projectType: ProjectType.DESKTOP,
    imagePath: light_login,
  },
  {
    name: "lightSignDocument",
    projectType: ProjectType.MOBILE,
    imagePath: light_sign_document,
  },
  {
    name: "lightSignDraw",
    projectType: ProjectType.DESKTOP,
    imagePath: light_sign_draw,
  },
];

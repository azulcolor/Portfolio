import chat_desktop from "@/public/images/projects/myMessage/chat_desktop.webp";
import chat_phone from "@/public/images/projects/myMessage/chat_mobile.webp";
import users_desktop from "@/public/images/projects/myMessage/users_desktop.webp";
import dashboard_desktop from "@/public/images/projects/myMessage/dashboard_desktop.webp";
import { Images, ProjectType } from "@/types";

export const myMessageImages: Images[] = [
  {
    name: "chatDesktop",
    projectType: ProjectType.DESKTOP,
    imagePath: chat_desktop,
  },
  {
    name: "chatPhone",
    projectType: ProjectType.MOBILE,
    imagePath: chat_phone,
  },
  {
    name: "usersDesktop",
    projectType: ProjectType.DESKTOP,
    imagePath: users_desktop,
  },
  {
    name: "dashboardDesktop",
    projectType: ProjectType.DESKTOP,
    imagePath: dashboard_desktop,
  },
];
import chat_desktop from "@/public/images/projects/myMessage/chat_desktop.webp";
import chat_phone from "@/public/images/projects/myMessage/chat_mobile.webp";
import users_desktop from "@/public/images/projects/myMessage/users_desktop.webp";
import dashboard_desktop from "@/public/images/projects/myMessage/dashboard_desktop.webp";
import { Images, ProjectData } from "../types";

const images: Images[] = [
  {
    name: "chatDesktop",
    imagePath: chat_desktop,
  },
  {
    name: "chatPhone",
    imagePath: chat_phone,
  },
  {
    name: "usersDesktop",
    imagePath: users_desktop,
  },
  {
    name: "dashboardDesktop",
    imagePath: dashboard_desktop,
  },
];

export const myMessage: ProjectData = {
  name: "My Message",
  slug: 'myMessage',
  year: "2023",
  images,
};

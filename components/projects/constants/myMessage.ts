import { myMessageImages } from "@/constants/images";
import { ProjectData } from "../types";

const images = myMessageImages.slice(0, 4);

export const myMessage: ProjectData = {
  name: "MyMessage",
  slug: "myMessage",
  year: "2024",
  images,
};

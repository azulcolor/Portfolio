import { StaticImageData } from "next/image";

export enum ProjectType {
  "MOBILE" = "mobile",
  "DESKTOP" = "desktop",
}

export interface Images {
  name: string;
  projectType: ProjectType;
  imagePath: StaticImageData;
}

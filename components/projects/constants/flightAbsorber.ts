import { flightAbsorberImages } from "@/constants/images";
import { ProjectData } from "../types";

const images = flightAbsorberImages.slice(0, 4);

export const flightAbsorber: ProjectData = {
  name: "Flight Absorber",
  slug: "flightAbsorber",
  year: "2023",
  images,
};

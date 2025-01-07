import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  imagePath: StaticImageData;
}

export const ProjectImage = ({ imagePath }: Props) => {
  return (
    <div className="project-image__container">
      <Image src={imagePath} alt="project_image" className="project-image" />
    </div>
  );
};

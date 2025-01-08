import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  imagePath: StaticImageData;
}

export const ProjectImage = ({ imagePath }: Props) => {
  return (
    <Link href="/" className="project-image__container">
      <Image src={imagePath} alt="project_image" className="project-image" />
    </Link>
  );
};

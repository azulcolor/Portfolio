import { ProjectType } from "@/types";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  imagePath: StaticImageData;
  projectType: ProjectType
}

export const ProjectImage = ({ imagePath, projectType }: Props) => {
  console.log(projectType)
  const width = projectType === ProjectType.DESKTOP ? '800' : '350'

  return (
    <Link href="/" className="project-image__container">
      <Image src={imagePath} alt="project_image" className="project-image" width={width}/>
    </Link>
  );
};

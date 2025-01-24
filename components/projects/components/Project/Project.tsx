import Image from "next/image";
import { ProjectData } from "../../types";
import { ProjectImage } from "./components";

interface Props {
  projectData: ProjectData;
}

export const Project = ({ projectData }: Props) => {
  const { name, year, images } = projectData;

  return (
    <div className="projects-project">
      <div className="project-info">
        <h3 className="project-info__name">{name}</h3>
        <p className="project-info__year">{year}</p>
      </div>
      <div className="project-images">
        {images.map((image) => (
          <ProjectImage key={image.name} imagePath={image.imagePath} projectType={image.projectType}/>
        ))}
      </div>
      <div className="project-stack">
        {projectData.technologiesImages.map((image, index) => (
          <Image src={image} height={32} key={index} alt={index.toString()} />
        ))}
      </div>
    </div>
  );
};

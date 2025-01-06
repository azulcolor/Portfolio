import Image from "next/image";
import { imagesPath } from "./constants";

export const Images = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {imagesPath.map((image, index) => (
          <div className="slide" key={index}>
            <Image key={index} src={image} width={40} height={40} alt={index.toString()} />
          </div>
        ))}
        {imagesPath.map((image, index) => (
          <div className="slide" key={index}>
            <Image key={index} src={image} width={40} height={40} alt={index.toString()} />
          </div>
        ))}
      </div>
    </div>
  );
};
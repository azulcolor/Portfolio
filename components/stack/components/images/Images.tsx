import Image from "next/image";
import { ParallaxImages } from "./components";
import { imagesPath } from "./constants";

export const Images = () => {
  return (
    <div>
      <ParallaxImages baseVelocity={3}>
        {imagesPath.map((image, index) => (
          <Image key={index} src={image} width={40} height={40} alt={index.toString()} />
        ))}
      </ParallaxImages>
    </div>
  );
};

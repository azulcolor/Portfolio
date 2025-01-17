import Image from "next/image";
import { imagesPath } from "../../constants";

export const Images = () => {
  return (
    <>
      {imagesPath.map((image, index) => (
        <div className="slide" key={index}>
          <Image src={image} width={40} height={40} alt={index.toString()} />
        </div>
      ))}
    </>
  );
};

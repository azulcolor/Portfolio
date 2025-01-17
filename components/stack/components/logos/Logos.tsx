import { logosPath } from "@/constants/images";
import Image from "next/image";

export const Logos = () => {
  return (
    <>
      {logosPath.map((image, index) => (
        <div className="slide" key={index}>
          <Image src={image} width={40} height={40} alt={index.toString()} />
        </div>
      ))}
    </>
  );
};

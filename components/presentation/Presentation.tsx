import Image from "next/image";
import myImage from "@/public/images/presentation/me.webp";
import { Title } from "./components";
import { Subtitle } from "./components/subtitle";

export const Presentation = () => {
  return (
    <section className="presentation-container">
      <div className="grow flex flex-col lg:items-center justify-end">
        <div>
          <Title />
          <Subtitle />
        </div>
      </div>
      <div className="image-container">
        <Image src={myImage} alt="me" height={300}/>
      </div>
    </section>
  );
};

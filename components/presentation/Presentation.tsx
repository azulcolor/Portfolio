import Image from "next/image";
import myImage from "@/public/images/presentation/coffee.gif";
import { Title } from "./components";
import { Subtitle } from "./components/subtitle";

export const Presentation = () => {
  return (
    <section className="presentation-container light-section sticky-section">
      <div>
        <Title />
        <Subtitle />
      </div>
      <div className="image-container">
        <Image src={myImage} alt="me" height={400} />
      </div>
    </section>
  );
};

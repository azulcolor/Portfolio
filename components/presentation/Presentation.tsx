import Image from "next/image";
import myImage from "@/public/images/presentation/coffee.gif";
import { Title, Subtitle } from "./components";

export const Presentation = () => {
  return (
    <section className="presentation-container light-section sticky-section" id="presentation">
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

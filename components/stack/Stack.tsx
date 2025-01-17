import { Slider } from "../ui/Slider";
import { Images, Text } from "./components";
import { imagesLength } from "./constants";

export const Stack = () => {
  return (
    <section className="stack-container dark-section sticky-section" id="stack">
      <Text />
      <Slider elementLength={imagesLength}>
        <Images />
        <Images />
      </Slider>
    </section>
  );
};

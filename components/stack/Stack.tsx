import { logosPathLength } from "@/constants/images";
import { Slider } from "../ui/Slider";
import { Logos, Text } from "./components";

export const Stack = () => {
  return (
    <section className="stack-container dark-section sticky-section" id="stack">
      <Text />
      <Slider elementLength={logosPathLength}>
        <Logos />
        <Logos />
      </Slider>
    </section>
  );
};

import { Title } from "./components";
import { Subtitle } from "./components/subtitle";

export const Presentation = () => {
  return (
    <section className="presentation-container">
      <div>
        <Title />
        <Subtitle />
      </div>
    </section>
  );
};

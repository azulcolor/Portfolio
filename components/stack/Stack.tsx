import { Images } from "./components/images";

export const Stack = () => {
  return (
    <div className="stack-container">
      <div className=" flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-orange-200 text-5xl ">Superpowers</h2>
          <p className="text-gray-200">That I have</p>
        </div>

        <p className="text-gray-100 text-2xl px-6 md:text-3xl md:w-2/3 text-center">
          I transform concepts into dynamic web experiences. Code is my craft, user satisfaction is my goal
        </p>
      </div>
      <Images />
    </div>
  );
};

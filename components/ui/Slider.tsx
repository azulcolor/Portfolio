import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  elementLength: number;
}

export const Slider = ({ children, elementLength }: Props) => {
  const sliderStyle: CSSProperties = {
    width: `calc(250px*${elementLength}*2)`,
  };

  return (
    <div className="slider">
      <div style={sliderStyle} className="slide-track">
        {children}
      </div>
    </div>
  );
};

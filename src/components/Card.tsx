import React, { FC, PropsWithChildren, useState } from "react";

export enum CardVariant {
  outlines = "outlines",
  primary = "primary",
}

interface CardProps extends PropsWithChildren {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlines ? "2px solid grey" : "none",
        background: variant === CardVariant.primary ? "grey" : "none",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;

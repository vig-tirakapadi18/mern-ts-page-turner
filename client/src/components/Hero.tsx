import React, { FC } from "react";
import heroBG from "../assets/hero.webp";

const Hero: FC = (): React.JSX.Element => {
  return (
    <div className="max-h-[30rem] w-full">
      <img
        src={heroBG}
        alt="stack of books"
        className="w-screen h-[30rem] relative object-cover"
      />
      <div className="bg-black opacity-30 absolute h-[30rem] mt-1 w-full left-0 top-20" />
      <div className="absolute top-[27rem] text-white left-20">
        <h2 className="text-5xl font-semibold">Knowledge at Your Fingertips!</h2>
        <p className="text-2xl">
          Find Top-Rated Non-Fiction Books on Business, Self-Help, History &
          More.
        </p>
      </div>
    </div>
  );
};

export default Hero;

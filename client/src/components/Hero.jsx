import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">
      <h1 className="text-4xl font-semibold md:text-5xl">
        Luxury cars on Rent
      </h1>
      <form></form>
      <img src={assets.main_car} alt="car" className="max-h-74" />
    </div>
  );
};

export default Hero;

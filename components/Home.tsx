import React from "react";
import background from "../assets/background.jpg";
import { Babang } from "../fonts";

const Home = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={background.src}
        alt="background"
        className="-mt-1 h-screen w-screen object-cover"
      />
      <div
        className={`absolute text-5xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold ${Babang.className} text-xl lg:left-1/2 lg:-translate-x-1/2 lg:text-5xl md:text-5xl md:left-0 md:translate-x-[11%]`}
      >
        ¡Sin turnos todo el mes de diciembre!
      </div>
    </div>
  );
};

export default Home;
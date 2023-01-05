import React from "react";
import background from "../assets/background.jpg";
import { Flathead } from "../fonts";

const Home = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={background.src}
        alt="background"
        className="h-screen w-screen object-cover"
      />
      <div
        className={`absolute text-5xl top-1/3 left-1/3 -translate-x-1/4 -translate-y-1/2 text-white font-semibold ${Flathead.className} lg:left-1/2 lg:-translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
      >
        ¡Nuevos precios!
      </div>
    </div>
  );
};

export default Home;

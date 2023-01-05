import React from "react";
import team from "../assets/team.png";
import DemoCarousel from "./DemoCarousel";

const Team = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <img
        src={team.src}
        alt="team"
        className="h-24 block mx-auto w-2/3 md:h-32 md:w-1/2 lg:w-1/5 lg:mt-20 lg:h-40 mt-10 mb-10 lg:mb-20"
      />
      <DemoCarousel />
    </div>
  );
};

export default Team;

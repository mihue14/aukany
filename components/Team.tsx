import React from "react";
import team from "../assets/team.png";
import DemoCarousel from "./DemoCarousel";

const Team = ({ id }: { id: string }) => {
  return (
    <div className="p-10 text-center" id={id}>
      <img
        src={team.src}
        alt="team"
        className="h-28 block mx-auto w-full md:h-32 md:w-1/2 lg:w-1/5 lg:mt-10 lg:h-24"
      />
      <DemoCarousel />
    </div>
  );
};

export default Team;

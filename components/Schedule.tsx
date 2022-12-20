import React from "react";
import schedule from "../assets/schedule.png";
import { Flathead } from "../fonts";

const Schedule = ({ id }: { id: string }) => {
  return (
    <div className="bg-black p-10 rounded-md mt-10 text-center" id={id}>
      <img
        src={schedule.src}
        alt="schedule"
        className="mb-5 h-20 block mx-auto"
      />
      <span className={`${Flathead.className} text-white mx-auto text-3xl`}>
        TODOS LOS DÍAS DE
        <br />
        09:00hs a 13:00hs
        <br />
        7:00hs a 21:00hs
      </span>
    </div>
  );
};

export default Schedule;

import React from "react";
import { Flathead } from "../fonts";
import { filterByDate } from "../hooks/filterByDate";

const Filters = () => {
  return (
    <div>
      <div className="grid">
        <span className={`${Flathead.className} mt-5 mx-auto`}>
          Buscar por fecha
        </span>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => filterByDate(e.target.value)}
          className="mb-5 mx-auto"
        />
      </div>
    </div>
  );
};

export default Filters;

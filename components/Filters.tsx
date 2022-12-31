import React from "react";
import { Flathead } from "../fonts";
import { useAppDispatch } from "../hooks";
import { getBookingsByDate } from "../redux/actions/bookingsActions";

const Filters = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="grid justify-center">
        <span className={`${Flathead.className} mt-5`}>Buscar por fecha</span>
        <input
          type="date"
          onChange={(e) => {
            dispatch(getBookingsByDate(e.target.value));
          }}
          className="mb-5 "
        />
      </div>
    </div>
  );
};

export default Filters;

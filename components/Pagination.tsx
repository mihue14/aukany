import React from "react";
import { IPagination } from "../interfaces/pagination";

const Pagination = ({
  bookingsPerPage,
  allBookings,
  currentPage,
  prev,
  next,
  waitPaged,
}: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allBookings / bookingsPerPage); i++) {
    pageNumbers.push(i);
  }

  let lastPage = pageNumbers.length;

  return (
    <div className="flex justify-center p-5">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mx-5"
        onClick={() => {
          if (currentPage > 1) {
            prev();
            waitPaged();
          }
        }}
      >
        {"<"}
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mx-5"
        onClick={() => {
          if (currentPage < lastPage) {
            next();
            waitPaged();
          }
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

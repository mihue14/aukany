import React, { useEffect, useState } from "react";
import { Flathead } from "../fonts";
import { BarLoader } from "react-spinners";
import { useAppDispatch } from "../hooks";
import { getAllBookings, getBookings } from "../redux/actions/bookingsActions";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IBookings } from "../interfaces/bookings";
import Pagination from "./Pagination";

const Bookings = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBookings());
    dispatch(getBookings(0));
  }, []);

  const bookings = useSelector(
    (state: RootState) => state.bookingReducer.bookings
  );

  const [loading, setLoading] = useState(false);
  const [bookingsPerPage, setBookingsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [bookings]);

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const waitPaged = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 250);
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <BarLoader
          cssOverride={{
            display: "flex",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2em",
            marginBottom: "2em",
          }}
        />
      ) : (
        <>
          {/* PC */}
          <div className="lg:flex lg:justify-around max-lg:hidden">
            <div className="lg:p-1">
              <span className="font-bold">Nombre</span>
              {currentBookings.length > 0 &&
                currentBookings.map((n: IBookings, index) => {
                  return <div key={index}>{n.name}</div>;
                })}
            </div>

            <div className="lg:p-1">
              <span className="font-bold">Apellido</span>
              {currentBookings.length > 0 &&
                currentBookings.map((l: IBookings, index) => {
                  return <div key={index}>{l.lastname}</div>;
                })}
            </div>

            <div className="lg:p-1">
              <span className="font-bold">Celular</span>
              {currentBookings.length > 0 &&
                currentBookings.map((p: IBookings, index) => {
                  return <div key={index}>+{p.phone}</div>;
                })}
            </div>

            <div className="lg:p-1">
              <span className="font-bold">Servicio</span>
              {currentBookings.length > 0 &&
                currentBookings.map((s: IBookings, index) => {
                  return <div key={index}>{s.service}</div>;
                })}
            </div>

            <div className="lg:p-1">
              <span className="font-bold">Días</span>
              {currentBookings.length > 0 &&
                currentBookings.map((d: IBookings, index) => {
                  return <div key={index}>{d.day}</div>;
                })}
            </div>

            <div className="lg:p-1">
              <span className="font-bold">Hora</span>
              {currentBookings.length > 0 &&
                currentBookings.map((h: IBookings, index) => {
                  return <div key={index}>{h.hour}</div>;
                })}
            </div>
          </div>

          {/* CELULAR */}
          <div className="min-[640px]:hidden">
            {currentBookings.length > 0 &&
              currentBookings.map((elem: IBookings, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-lg border-black p-2 my-5"
                  >
                    <span className="font-bold">Nombre: </span>
                    {elem.name}
                    <br />
                    <span className="font-bold">Apellido: </span>
                    {elem.lastname}
                    <br />
                    <span className="font-bold">Celular: </span>+{elem.phone}
                    <br />
                    <span className="font-bold">Servicio: </span>
                    {elem.service}
                    <br />
                    <span className="font-bold">Día: </span>
                    {elem.day}
                    <br />
                    <span className="font-bold">Hora: </span>
                    {elem.hour}
                  </div>
                );
              })}
          </div>
        </>
      )}

      <Pagination
        allBookings={bookings.length}
        bookingsPerPage={bookingsPerPage}
        currentPage={currentPage}
        prev={prev}
        next={next}
        waitPaged={waitPaged}
      />
    </div>
  );
};

export default Bookings;

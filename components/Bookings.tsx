import axios from "axios";
import React, { useEffect, useState } from "react";
import { Flathead } from "../fonts";
import { pagination } from "../hooks/pagination";
import { BarLoader } from "react-spinners";

const Bookings = () => {
  const [bookings, setBookings] = useState({
    name: [],
    lastname: [],
    service: [],
    day: [],
    hour: [],
  });
  const [allBookings, setAllBookings] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/api/booking").then(({ data }) => {
      setBookings({
        name: data.bookings.map((d: { name: string }) => d.name),
        lastname: data.bookings.map((d: { lastname: string }) => d.lastname),
        service: data.bookings.map((d: { service: string }) => d.service),
        day: data.bookings.map((d: { day: string }) => d.day),
        hour: data.bookings.map((d: { hour: string }) => d.hour),
      });
      setAllBookings(data.allBookings);
    });
  }, []);

  return (
    <div className="text-center">
      <span className={`${Flathead.className} text-2xl`}>Turnos:</span>

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
        <div className="flex justify-around">
          <div className="p-1">
            <span className="font-bold">Nombre</span>
            {bookings.name.length > 0 &&
              bookings.name.map((n, index) => {
                return <div key={index}>{n}</div>;
              })}
          </div>

          <div className="p-1">
            <span className="font-bold">Apellido</span>
            {bookings.lastname.length > 0 &&
              bookings.lastname.map((l, index) => {
                return <div key={index}>{l}</div>;
              })}
          </div>

          <div className="p-1">
            <span className="font-bold">Servicio</span>
            {bookings.service.length > 0 &&
              bookings.service.map((s, index) => {
                return <div key={index}>{s}</div>;
              })}
          </div>

          <div className="p-1">
            <span className="font-bold">Días</span>
            {bookings.day.length > 0 &&
              bookings.day.map((d, index) => {
                return <div key={index}>{d}</div>;
              })}
          </div>

          <div className="p-1">
            <span className="font-bold">Hora</span>
            {bookings.hour.length > 0 &&
              bookings.hour.map((h, index) => {
                return <div key={index}>{h}</div>;
              })}
          </div>
        </div>
      )}

      <div className="flex justify-center p-5">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mx-5"
          onClick={async () => {
            if (page >= 1) {
              setLoading(true);
              setBookings({
                name: (await pagination(page - 1)).name,
                lastname: (await pagination(page - 1)).lastname,
                service: (await pagination(page - 1)).service,
                day: (await pagination(page - 1)).day,
                hour: (await pagination(page - 1)).hour,
              });
              setPage(page - 1);
              setTimeout(() => {
                setLoading(false);
              }, 10);
            }
          }}
        >
          {"<"}
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mx-5"
          onClick={async () => {
            if (page < Math.floor(allBookings.length / 5)) {
              setLoading(true);
              setBookings({
                name: (await pagination(page + 1)).name,
                lastname: (await pagination(page + 1)).lastname,
                service: (await pagination(page + 1)).service,
                day: (await pagination(page + 1)).day,
                hour: (await pagination(page + 1)).hour,
              });
              setPage(page + 1);
              setTimeout(() => {
                setLoading(false);
              }, 10);
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Bookings;

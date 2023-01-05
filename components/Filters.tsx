import React, { useState } from "react";
import { Flathead } from "../fonts";
import { useAppDispatch } from "../hooks";
import {
  getAllBookings,
  getBookingsByDate,
  getBookingsByLastname,
  getBookingsByName,
  getBookingsByService,
} from "../redux/actions/bookingsActions";
import { dateFormate } from "../utils/date";

const Filters = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    date: "",
    service: "DEFAULT",
  });
  return (
    <div className="grid justify-center">
      <span className={`${Flathead.className} mt-5`}>Buscar por fecha</span>
      <input
        id="input.date"
        type="date"
        onChange={(e) => {
          setInput({ ...input, date: dateFormate(e.target.value) });
          dispatch(
            getBookingsByDate(
              e.target.value,
              input.name,
              input.lastname,
              input.service
            )
          );
        }}
        className="mb-5 "
      />
      <form className="flex flex-col">
        <span className={`${Flathead.className}`}>Buscar por nombre</span>
        <div className="flex">
          <input
            type="search"
            name="name"
            value={input.name}
            onChange={(e) => {
              setInput({ ...input, name: e.target.value });
              dispatch(
                getBookingsByName(
                  e.target.value,
                  input.lastname,
                  input.date,
                  input.service
                )
              );
            }}
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Buscar"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text flex items-center first-line:py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
            id="basic-addon2"
            onClick={() => dispatch(getBookingsByName(""))}
          ></span>
        </div>
      </form>

      <form className="mt-5">
        <span className={`${Flathead.className}`}>Buscar por apellido</span>
        <div className="flex">
          <input
            type="search"
            name="lastname"
            value={input.lastname}
            onChange={(e) => {
              setInput({ ...input, lastname: e.target.value });
              dispatch(
                getBookingsByLastname(
                  e.target.value,
                  input.name,
                  input.date,
                  input.service
                )
              );
            }}
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Buscar"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text flex items-center py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
            id="basic-addon2"
            onClick={() => dispatch(getBookingsByLastname(""))}
          ></span>
        </div>
      </form>

      <form
        className={`mt-5 ${
          input.lastname === "" ||
          input.name === "" ||
          input.date === "" ||
          input.service === ""
            ? "mb-10"
            : "mb-5"
        } flex flex-col`}
      >
        <span className={`${Flathead.className} `}>Buscar por servicio</span>
        <select
          className="border border-black rounded p-1 "
          defaultValue={"DEFAULT"}
          onChange={(e) => {
            setInput({ ...input, service: e.target.value });
            dispatch(
              getBookingsByService(
                e.target.value,
                input.lastname,
                input.name,
                input.date
              )
            );
          }}
          value={input.service}
        >
          <option value="DEFAULT">TODOS</option>
          <optgroup label="CABELLO">
            <option value="CORTE">CORTE</option>
            <option value="COLOR">COLOR</option>
            <option value="CORTE + COLOR">CORTE + COLOR</option>
          </optgroup>
          <optgroup label="BARBA">
            <option value="ARREGLO DE BARBA">ARREGLO DE BARBA</option>
            <option value="ARREGLO DE BARBA + RITUAL TOALLA">
              ARREGLO DE BARBA + RITUAL TOALLA
            </option>
            <option value="AFEITADO">AFEITADO</option>
          </optgroup>
        </select>
      </form>

      <button
        className={`${
          input.lastname !== "" ||
          input.name !== "" ||
          input.date !== "" ||
          input.service !== "DEFAULT"
            ? "none"
            : "hidden"
        } mb-10 p-1 rounded-md text-white bg-red-500 ${Flathead.className}`}
        onClick={() => {
          if (typeof document !== "undefined")
            (document.getElementById("input.date") as HTMLInputElement).value =
              "";
          setInput({ name: "", lastname: "", service: "DEFAULT", date: "" });
          dispatch(getAllBookings());
        }}
      >
        BORRAR FILTROS
      </button>
    </div>
  );
};

export default Filters;

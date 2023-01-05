import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Flathead } from "../fonts";
import disableScroll from "disable-scroll";
import { booking } from "../utils/booking";
import axios from "axios";
import { IBookings } from "../interfaces/bookings";
import Swal from "sweetalert2";
import { errorAlert, successAlert } from "../utils/alerts";

const ModalBooking = ({
  isOpen,
  isClosed,
}: {
  isOpen: boolean;
  isClosed: any;
}) => {
  isOpen ? disableScroll.on() : disableScroll.off();

  let today = new Date().toDateString().split(" ");
  let hourNumber = new Date().getHours();
  let minuteNumber = new Date().getMinutes();
  let hour: string, minute: string;

  if (hourNumber < 10) {
    hour = "0" + hourNumber.toString();
  }

  if (minuteNumber < 10) {
    minute = "0" + minuteNumber.toString();
  }

  const [bookings, setBookings] = useState<any>([]);

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    service: "",
    phone: "",
    day: "",
    hour: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.hour < `${hour}:${minute}`) return errorAlert();
    await axios.post("/api/booking", input);
    setInput({
      name: "",
      lastname: "",
      service: "",
      phone: "",
      day: "",
      hour: "",
    });
    successAlert();
    isClosed();
  };

  useEffect(() => {
    axios.get("/api/booking").then(({ data }) => {
      let arr: any[] = [];
      data.bookings.map((b: IBookings) => {
        arr.push(b.day.concat(" " + b.hour));
      });
      setBookings(arr);
    });
  }, [input]);

  return (
    <Modal
      isOpen={isOpen}
      preventScroll
      style={{
        content: {
          maxWidth: "1024px",
          height: "auto",
          margin: "auto",
          backgroundColor: "gray",
        },
      }}
      ariaHideApp={false}
    >
      <button
        className="float-right bg-gray-700 text-white rounded p-2"
        onClick={() => isClosed()}
      >
        X
      </button>
      <span
        className={`${Flathead.className} float-left bg-gray-700 text-white rounded p-2`}
      >
        COMPLETA TUS DATOS
      </span>
      <div className="mt-20 lg:mt-">
        <form onSubmit={handleSubmit}>
          {/* NOMBRE */}
          <div className="mb-5">
            <input
              value={input.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Nombre"
              className="w-full bg-gray-300 p-2 rounded peer border border-slate-400"
              required
            />
            <p className="invisible peer-invalid:visible text-red-600 font-bold">
              Ingrese su nombre por favor.
            </p>
          </div>

          {/* APELLIDO */}
          <div className="mb-5">
            <input
              value={input.lastname}
              name="lastname"
              onChange={handleChange}
              type="text"
              placeholder="Apellido"
              className="w-full bg-gray-300 p-2 rounded peer border border-slate-400"
              required
            />
            <p className="invisible peer-invalid:visible text-red-600 font-bold">
              Ingrese su apellido por favor.
            </p>
          </div>

          {/* CELULAR */}
          <div className="mb-5">
            <input
              value={input.phone}
              name="phone"
              onChange={handleChange}
              type="number"
              placeholder="+54 (000)-0000000"
              className="w-full bg-gray-300 p-2 rounded peer border border-slate-400"
              required
            />
            <p className="invisible peer-invalid:visible text-red-600 font-bold">
              Ingre su número de teléfono por favor.
            </p>
          </div>

          {/* SERVICIO */}
          <div className="mb-5">
            <select
              name="service"
              value={input.service}
              className="w-full bg-gray-300 p-2 rounded peer border border-slate-400"
              onChange={(e) => setInput({ ...input, service: e.target.value })}
              required
            >
              <option value="" disabled selected>
                SERVICIO
              </option>
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
            <p className="invisible peer-invalid:visible text-red-600 font-bold">
              Ingre el servicio por favor.
            </p>
          </div>

          {/* DÍA */}
          <div className="mb-5">
            <input
              type="date"
              name="day"
              value={input.day}
              onChange={handleChange}
              min={`${today[3]}-${
                new Date().getMonth() + 1 === 1 ? "01" : null
              }-${today[2]}`}
              className="w-full bg-gray-300 p-2 rounded peer border border-slate-400"
              required
            />
            <p className="invisible peer-invalid:visible text-red-600 font-bold">
              Ingre el día por favor.
            </p>
          </div>

          {/* HORA */}
          <div className="mb-5">
            <select
              value={input.hour}
              onChange={(e) => setInput({ ...input, hour: e.target.value })}
              className="w-full bg-gray-300 p-2 rounded peer border border-slate-400"
              required
            >
              <option value="" selected disabled>
                HORARIO
              </option>
              {booking(input.day, bookings).map((element, index) => {
                return element.length < 6 ? (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ) : (
                  <option value={element} disabled key={index}>
                    {element}
                  </option>
                );
              })}
            </select>
            <p className="invisible peer-invalid:visible text-red-600 font-bold">
              Ingre la hora por favor.
            </p>
          </div>

          {/* RESERVAR  */}
          <button
            className={`${Flathead.className} text-white flex mx-auto mt-8 bg-gray-700 p-2 rounded-md hover:bg-gray-200 hover:text-black hover:scale-110 transition-all duration-500`}
          >
            RESERVAR
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalBooking;

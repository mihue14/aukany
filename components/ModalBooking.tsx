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

const ModalBooking = ({
  isOpen,
  isClosed,
}: {
  isOpen: boolean;
  isClosed: any;
}) => {
  isOpen ? disableScroll.on() : disableScroll.off();

  let today = new Date().toDateString().split(" ");
  const [bookings, setBookings] = useState<any>([]);

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    service: "DEFAULT",
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
    await axios.post("/api/booking", input);
    setInput({
      name: "",
      lastname: "",
      service: "DEFAULT",
      phone: "+54",
      day: "",
      hour: "",
    });
    Swal.fire({
      icon: "success",
      title: "¡Su turno fue reservado!",
      showConfirmButton: true,
      timer: 3000,
    });
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
          <input
            value={input.name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Nombre"
            className="w-full bg-gray-300 p-2 mb-5 rounded"
          />

          {/* APELLIDO */}
          <input
            value={input.lastname}
            name="lastname"
            onChange={handleChange}
            type="text"
            placeholder="Apellido"
            className="w-full bg-gray-300 p-2 mb-5 rounded"
          />

          {/* CELULAR */}
          <PhoneInput
            country={"ar"}
            onChange={(phone) => setInput({ ...input, phone })}
            value={input.phone}
            inputStyle={{
              backgroundColor: "rgb(209 213 219)",
              width: "100%",
              minHeight: "40px",
            }}
            buttonStyle={{
              backgroundColor: "rgb(209 213 219)",
            }}
            containerStyle={{
              marginBottom: "1.25rem",
              borderRadius: "0.25rem",
              minHeight: "40px",
            }}
          />

          {/* SERVICIO */}
          <select
            name="service"
            defaultValue={"DEFAULT"}
            value={input.service}
            className="w-full bg-gray-300 p-2 mb-5 rounded"
            onChange={(e) => setInput({ ...input, service: e.target.value })}
          >
            <option value="DEFAULT" disabled>
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

          {/* DÍA */}
          <input
            type="date"
            name="day"
            value={input.day}
            onChange={handleChange}
            min={`${today[3]}-${new Date().getMonth() + 1}-${today[2]}`}
            className="w-full bg-gray-300 p-2 mb-5 rounded"
          />

          {/* HORA */}
          <select
            defaultValue={"Default"}
            value={input.hour}
            onChange={(e) => setInput({ ...input, hour: e.target.value })}
            className="w-full bg-gray-300 p-2 mb-5 rounded horario"
          >
            <option value="Default" disabled>
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

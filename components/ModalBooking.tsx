import React, { useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Flathead } from "../fonts";

const ModalBooking = ({
  isOpen,
  isClosed,
}: {
  isOpen: boolean;
  isClosed: any;
}) => {
  const [input, setInput] = useState({ name: "", lastname: "", phone: "" });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Modal isOpen={isOpen} preventScroll={true}>
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
      <div className="mt-[25%]">
        <form>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full bg-gray-300 p-2 mb-5 rounded"
          />
          <input
            type="text"
            placeholder="Apellido"
            className="w-full bg-gray-300 p-2 mb-5 rounded"
          />
          <PhoneInput
            country={"ar"}
            onChange={(phone) => setInput({ ...input, phone })}
            inputStyle={{
              backgroundColor: "rgb(209 213 219)",
              width: "100%",
            }}
          />
        </form>
      </div>
    </Modal>
  );
};

export default ModalBooking;

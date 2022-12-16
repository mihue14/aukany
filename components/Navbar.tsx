import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import MenuDropdown from "./MenuDropdown";
import background from "../assets/background.jpg";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      setScrollY(window.scrollY);
    };
  }, [scrollY]);

  return (
    <nav
      className={`flex justify-around w-full h-full sticky z-50 top-0 bg-black ${
        scrollY < 200 ? "bg-opacity-100" : "bg-opacity-80"
      }`}
    >
      {/* MOBILE */}
      <MenuDropdown />
      <img src={logo.src} alt="logo" className="h-auto w-auto lg:hidden" />
      <a
        href="/reservar"
        className="my-auto text-white p-1 rounded-md bg-black lg:hidden hover:bg-white hover:text-black transition-all duration-500"
      >
        ¡RESERVAR!
      </a>

      {/* PC */}
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        INICIO
      </a>
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        NOSOTROS
      </a>
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        HORARIOS
      </a>
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        EQUIPO
      </a>
      <img
        src={logo.src}
        alt="logo"
        className="h-auto w-auto hidden lg:block"
      />
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        SERVICIOS
      </a>
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        GALERIA
      </a>
      <a className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500">
        CONTACO
      </a>
      <a
        href="/reservar"
        className="my-auto p-1 rounded-md bg-white text-black max-md:hidden max-lg:hidden hover:bg-gray-800 hover:text-white transition-all duration-500"
      >
        ¡RESERVAR YA!
      </a>
    </nav>
  );
};

export default Navbar;

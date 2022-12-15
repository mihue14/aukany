import React from "react";
import logo from "../assets/logo.png";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-around w-full sticky top-0 bg-black bg-opacity-70">
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
      <a
        href="/"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        INICIO
      </a>
      <a
        href="/nosotros"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        NOSOTROS
      </a>
      <a
        href="/horarios"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        HORARIOS
      </a>
      <a
        href="/equipo"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        EQUIPO
      </a>
      <img
        src={logo.src}
        alt="logo"
        className="h-auto w-auto hidden lg:block"
      />
      <a
        href="/servicios"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        SERVICIOS
      </a>
      <a
        href="/galeria"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        GALERIA
      </a>
      <a
        href="/contacto"
        className="my-auto text-white max-md:hidden hover:rounded-lg hover:bg-black p-1 transition-all duration-500"
      >
        CONTACO
      </a>
      <a
        href="/reservar"
        className="my-auto p-1 rounded-md bg-white text-black max-md:hidden hover:bg-black hover:text-white transition-all duration-500"
      >
        ¡RESERVAR YA!
      </a>
    </nav>
  );
};

export default Navbar;

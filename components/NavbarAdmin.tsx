import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import MenuDropdown from "./MenuDropdown";
import Scroll from "react-scroll";
import ModalBooking from "./ModalBooking";

const NavbarAdmin = () => {
  return (
    <nav
      className={`flex justify-around w-full h-24 z-10 sticky top-0 bg-black ${
        scrollY < 200 ? "bg-opacity-100" : "bg-opacity-80"
      } `}
    >
      {/* MOBILE */}
      <a
        href="/"
        className="my-auto text-white p-1 rounded-md bg-black  hover:bg-white hover:text-black transition-all duration-500 md:text-xl cursor-pointer"
      >
        INICIO
      </a>
      <img src={logo.src} alt="logo" className="h-auto w-auto" />
      <a
        href="/admin"
        className="my-auto text-white p-1 rounded-md bg-black hover:bg-white hover:text-black transition-all duration-500 md:text-xl cursor-pointer"
      >
        ADMIN
      </a>
    </nav>
  );
};

export default NavbarAdmin;

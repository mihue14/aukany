import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import MenuDropdown from "./MenuDropdown";
import Scroll from "react-scroll";
import ModalBooking from "./ModalBooking";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    window.onscroll = function () {
      setScrollY(window.scrollY);
    };
  }, [scrollY]);

  const handleScroll = (id: string, p: number) => {
    Scroll.scroller.scrollTo(id, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: p,
    });
  };

  const admin = useSession().data?.user;

  return (
    <nav
      className={`flex justify-around w-full h-24 z-10 sticky top-0 bg-black ${
        scrollY < 200 ? "bg-opacity-100" : "bg-opacity-80"
      } ${modalIsOpen ? "hidden" : ""}`}
    >
      {/* MOBILE */}
      <MenuDropdown />
      <img src={logo.src} alt="logo" className="h-auto w-auto lg:hidden" />

      {admin ? (
        <a
          href="/admin"
          className="my-auto text-white p-1 rounded-md bg-black lg:hidden hover:bg-white hover:text-black transition-all duration-500 md:text-xl cursor-pointer"
        >
          ADMIN
        </a>
      ) : (
        <a
          onClick={() => openModal()}
          className="my-auto text-white p-1 rounded-md bg-black lg:hidden hover:bg-white hover:text-black transition-all duration-500 md:text-xl cursor-pointer"
        >
          ¡RESERVAR!
        </a>
      )}

      {/* PC */}
      <a
        onClick={() =>
          Scroll.animateScroll.scrollToTop({
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50,
          })
        }
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        INICIO
      </a>
      <a
        onClick={() => handleScroll("1", -120)}
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        NOSOTROS
      </a>
      <a
        onClick={() => handleScroll("2", -85)}
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        HORARIOS
      </a>
      <a
        onClick={() => handleScroll("3", -95)}
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        EQUIPO
      </a>
      <img
        src={logo.src}
        alt="logo"
        className="h-auto w-auto hidden lg:block"
      />
      <a
        onClick={() => handleScroll("4", -95)}
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        SERVICIOS
      </a>
      <a
        onClick={() => handleScroll("5", -135)}
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        GALERIA
      </a>
      <a
        onClick={() => handleScroll("6", 0)}
        className="my-auto text-white max-md:hidden max-lg:hidden hover:rounded-lg hover:bg-gray-800 p-1 transition-all duration-500 cursor-pointer"
      >
        CONTACO
      </a>

      {admin ? (
        <a
          href="/admin"
          className="my-auto p-1 rounded-md bg-white text-black max-md:hidden max-lg:hidden hover:bg-gray-800 hover:text-white transition-all duration-500 cursor-pointer"
        >
          ADMIN
        </a>
      ) : (
        <a
          onClick={() => openModal()}
          className="my-auto p-1 rounded-md bg-white text-black max-md:hidden max-lg:hidden hover:bg-gray-800 hover:text-white transition-all duration-500 cursor-pointer"
        >
          ¡RESERVAR YA!
        </a>
      )}

      {/* MODAL */}
      <ModalBooking isOpen={modalIsOpen} isClosed={closeModal} />
    </nav>
  );
};

export default Navbar;

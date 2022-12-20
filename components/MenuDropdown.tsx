import React from "react";
import { useState } from "react";
import Scroll from "react-scroll";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (id: string, p: number) => {
    Scroll.scroller.scrollTo(id, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: p,
    });
  };

  return (
    <div className="flex sticky top-0 justify-center my-auto lg:hidden">
      <div>
        <div className="dropend relative">
          <button
            className="
          dropdown-toggle
          px-2
          py-2.5
          bg-gray-900
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-800 hover:shadow-lg
          focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
          md:text-xl
        "
            type="button"
            id="dropdownMenuButton1e"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            MENÚ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list md:h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <ul
            className={`
          dropdown-menu
          min-w-max
          absolute
          ${isOpen ? "block" : "hidden"}
          bg-black
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        `}
            aria-labelledby="dropdownMenuButton1e"
          >
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false),
                    Scroll.animateScroll.scrollToTop({
                      duration: 1500,
                      delay: 100,
                      smooth: true,
                      offset: 50,
                    });
                }}
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false), handleScroll("1", -120);
                }}
              >
                NOSOTROS
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false), handleScroll("2", -95);
                }}
              >
                HORARIOS
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false), handleScroll("3", -95);
                }}
              >
                EQUIPO
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false), handleScroll("4", -95);
                }}
              >
                SERVICIOS
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false), handleScroll("5", -135);
                }}
              >
                GALERÍA
              </a>
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              md:text-base
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-white
              hover:bg-white
              hover:text-black
              cursor-pointer
            "
                onClick={() => {
                  setIsOpen(false), handleScroll("6", 0);
                }}
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;

import React from "react";
import services from "../assets/services.png";
import { Flathead } from "../fonts";

const Services = () => {
  return (
    <div className="bg-[url('../assets/background2.jpg')] h-screen bg-cover bg-center bg-no-repeat">
      <img
        src={services.src}
        alt="services"
        className="h-1/5 w-1/2 mx-auto pt-5 lg:w-1/5 lg:pt-10 md:h-1/4"
      />
      <div className="flex flex-col justify-between h-[35em] md:h-[40em] lg:h-[35em]">
        <div className="w-5/6 mx-auto block mt-10 mb-5 lg:mt-20">
          <span
            className={`bg-[#b6a688] ${Flathead.className} text-xl p-2 px-12 md:text-4xl`}
          >
            CABELLO
          </span>
          <div className="border border-[#b6a688] mt-1"></div>
        </div>
        <div className="flex justify-between w-5/6 mx-auto">
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            CORTE
          </span>
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            $...
          </span>
        </div>
        <div className="flex justify-between w-5/6 mx-auto">
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            COLOR
          </span>
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            $...
          </span>
        </div>
        <div className="flex justify-between w-5/6 mx-auto">
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            COLOR + CORTE
          </span>
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            $...
          </span>
        </div>

        <div className="w-5/6 mx-auto block mt-10 mb-5">
          <span
            className={`bg-[#b6a688] ${Flathead.className} text-xl p-2 px-14 md:text-4xl`}
          >
            BARBA
          </span>
          <div className="border border-[#b6a688] mt-1"></div>
        </div>
        <div className="flex justify-between w-5/6 mx-auto">
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            ARREGLO DE BARBA
          </span>
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            $...
          </span>
        </div>
        <div className="flex justify-between w-5/6 mx-auto">
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            ARREGLAR DE BARBA + RITUAL TOALLA
          </span>
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            $...
          </span>
        </div>
        <div className="flex justify-between w-5/6 mx-auto">
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            AFEITADO
          </span>
          <span className={`${Flathead.className} text-white md:text-2xl`}>
            $...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;

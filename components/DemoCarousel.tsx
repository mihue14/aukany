import React from "react";
import { Carousel } from "react-responsive-carousel";
import barber1 from "../assets/barber1.jpg";
import barber2 from "../assets/barber2.jpg";
import barber3 from "../assets/barber3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      swipeable
      emulateTouch
      showArrows={false}
      showStatus={false}
      interval={2500}
      swipeScrollTolerance={30}
      preventMovementUntilSwipeScrollTolerance
      className="w-screen -ml-10 lg:-ml-[3.6em] mt-10 lg:w-[80%] lg:translate-x-[20%] lg:mt-20"
    >
      <div className="h-full w-full lg:max-h-[45em]">
        <img src={barber1.src} alt="barber" className="h-full w-full" />
        <p className="legend">Lionel Messi - Fundador</p>
      </div>
      <div className="h-full w-full lg:max-h-[45em]">
        <img src={barber2.src} alt="barber" className="h-full w-full" />
        <p className="legend">Enzo Fernández - Barbero</p>
      </div>
      <div className="h-full w-full lg:max-h-[45em]">
        <img src={barber3.src} alt="barber" className="h-full w-full" />
        <p className="legend">Julián Álvarez - Barbero</p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;

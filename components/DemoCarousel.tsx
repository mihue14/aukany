import React from "react";
import { Carousel } from "react-responsive-carousel";
import barber1 from "../assets/barber1.jpg";
import barber2 from "../assets/barber2.jpg";
import barber3 from "../assets/barber3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = () => {
  return (
    <Carousel
      autoPlay
      dynamicHeight
      infiniteLoop
      swipeable
      emulateTouch
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      interval={2500}
      swipeScrollTolerance={30}
      preventMovementUntilSwipeScrollTolerance
    >
      <div>
        <img
          src={barber1.src}
          alt="barber"
          className="max-w-full max-h-[850px] object-contain h-auto"
        />
        <p className="legend">Lionel Messi - Fundador</p>
      </div>
      <div>
        <img
          src={barber2.src}
          alt="barber"
          className="max-w-full max-h-[850px] object-contain h-auto"
        />
        <p className="legend">Enzo Fernández - Barbero</p>
      </div>
      <div>
        <img
          src={barber3.src}
          alt="barber"
          className="max-w-full max-h-[850px] object-contain h-auto"
        />
        <p className="legend">Julián Álvarez - Barbero</p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import haircut1 from "../assets/haircut (1).jpg";
import haircut2 from "../assets/haircut (2).jpg";
import haircut3 from "../assets/haircut (3).jpg";
import haircut4 from "../assets/haircut (4).jpg";
import haircut5 from "../assets/haircut (5).jpg";
import haircut6 from "../assets/haircut (6).jpg";
import haircut7 from "../assets/haircut (7).jpg";

const DemoCarouselGallery = () => {
  return (
    <Carousel
      autoPlay
      dynamicHeight
      infiniteLoop
      swipeable
      emulateTouch
      showArrows={false}
      showStatus={false}
      interval={2500}
      swipeScrollTolerance={30}
      preventMovementUntilSwipeScrollTolerance
      className="lg:w-[80%] lg:mx-auto"
    >
      <div className="lg:h-[40em]">
        <img src={haircut1.src} alt="haircut" className="h-full w-full" />
      </div>
      <div className="lg:h-[40em]">
        <img src={haircut2.src} alt="haircut" className="h-full w-full" />
      </div>
      <div className="lg:h-[40em]">
        <img src={haircut3.src} alt="haircut" className="h-full w-full" />
      </div>
      <div className="lg:h-[40em]">
        <img src={haircut4.src} alt="haircut" className="h-full w-full" />
      </div>
      <div className="lg:h-[40em]">
        <img src={haircut5.src} alt="haircut" className="h-full w-full" />
      </div>
      <div className="lg:h-[40em]">
        <img src={haircut6.src} alt="haircut" className="h-full w-full" />
      </div>
      <div className="lg:h-[40em]">
        <img src={haircut7.src} alt="haircut" className="h-full w-full" />
      </div>
    </Carousel>
  );
};

export default DemoCarouselGallery;

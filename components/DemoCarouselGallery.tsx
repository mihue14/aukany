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
      showIndicators={false}
      interval={2500}
      swipeScrollTolerance={30}
      preventMovementUntilSwipeScrollTolerance
      className="max-w-screen-md h-auto lg:mx-auto"
    >
      <div>
        <img src={haircut1.src} alt="haircut" />
      </div>
      <div>
        <img src={haircut2.src} alt="haircut" />
      </div>
      <div>
        <img src={haircut3.src} alt="haircut" />
      </div>
      <div>
        <img src={haircut4.src} alt="haircut" />
      </div>
      <div>
        <img src={haircut5.src} alt="haircut" />
      </div>
      <div>
        <img src={haircut6.src} alt="haircut" />
      </div>
      <div>
        <img src={haircut7.src} alt="haircut" />
      </div>
    </Carousel>
  );
};

export default DemoCarouselGallery;

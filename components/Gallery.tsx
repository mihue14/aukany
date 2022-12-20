import React from "react";
import gallery from "../assets/gallery.png";
import DemoCarouselGallery from "./DemoCarouselGallery";

const Gallery = () => {
  return (
    <div>
      <img
        src={gallery.src}
        alt="gallery"
        className="w-1/2 h-full block mx-auto mt-10 mb-10"
      />
      <DemoCarouselGallery />
    </div>
  );
};

export default Gallery;

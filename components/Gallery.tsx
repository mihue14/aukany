import React from "react";
import gallery from "../assets/gallery.png";
import DemoCarouselGallery from "./DemoCarouselGallery";

const Gallery = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <img
        src={gallery.src}
        alt="gallery"
        className="w-1/2 h-full block mx-auto mt-10 mb-10 lg:h-1/2 lg:w-1/4"
      />
      <DemoCarouselGallery />
    </div>
  );
};

export default Gallery;

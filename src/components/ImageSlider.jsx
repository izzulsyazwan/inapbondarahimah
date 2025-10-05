import React from "react";
import "./imageslider.css";

export function ImageSlider({ imageUrls }) {
  return (
    <div className="md:hidden">
      <div className="carousel">
        <div className="image-slider ">
          <img src={imageUrls[0]} alt={`Image 1`} />
          <img src={imageUrls[1]} alt={`Image 2`} />
          <img src={imageUrls[2]} alt={`Image 3`} />
          <img src={imageUrls[3]} alt={`Image 4`} />
          <img src={imageUrls[4]} alt={`Image 5`} />
          <img src={imageUrls[5]} alt={`Image 6`} />
          <img src={imageUrls[6]} alt={`Image 7`} />
        </div>
        <div aria-hidden="true" className="image-slider">
          <img src={imageUrls[0]} alt={`Image 1`} />
          <img src={imageUrls[1]} alt={`Image 2`} />
          <img src={imageUrls[2]} alt={`Image 3`} />
          <img src={imageUrls[3]} alt={`Image 4`} />
          <img src={imageUrls[4]} alt={`Image 5`} />
          <img src={imageUrls[5]} alt={`Image 6`} />
          <img src={imageUrls[6]} alt={`Image 7`} />
        </div>
      </div>
    </div>
  );
}

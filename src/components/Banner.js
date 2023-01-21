import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative">
          <img
           className="h-[400px]"
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg"
            alt="new year sales"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt="furniture"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt="enjoy your life"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt="beauty selection"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt="computer accessories"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt="shop toys and games"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

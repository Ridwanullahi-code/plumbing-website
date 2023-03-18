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
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="new year sales"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            loading="lazy"
            src="https://images.unsplash.com/photo-1552143233-c29bb1292978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="furniture"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="white metal pipe on brown brick wall"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://images.unsplash.com/photo-1593424469977-77a35fed63c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Classic brass shower valve on a tiled wall in a victorian style bathroom"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://plus.unsplash.com/premium_photo-1661962372055-1ef334c33f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="steel pipelines on a raw milk factory"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
        <div className="relative">
          <img
            className="h-[400px]"
            src="https://images.unsplash.com/photo-1518618750560-8f07abde4e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
            alt="four white ceramic urinal sink"
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 overlay">
          </span>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

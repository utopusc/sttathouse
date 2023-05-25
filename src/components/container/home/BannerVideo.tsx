import React from "react";
import Image from "next/image";
import twelve from "public/images/icon/12.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const BannerVideo = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplayspeed: 1000,
    centerMode: false,
    focusOnSelect: true,
  };

  return (
    <div className="container">
      <div className="banner-video-area banner-video-area-4 bg-relative">
        <div className="scroll-down">
          <a href="#about-area">
            <Image src={twelve} alt="Image" />
          </a>
        </div>
        <Slider {...settings} className="slider banner-slider banner-custom">
          <div><Image src={require("public/images/slide/1.png")} alt="Image 1" /></div>
          <div><Image src={require("public/images/slide/2.png")} alt="Image 1" /></div>
          <div><Image src={require("public/images/slide/3.png")} alt="Image 1" /></div>
        </Slider>
        <div className="banner-call">Call us: +1 698 000 420</div>
        <div className="banner-slider-control">
          <div className="slider-dots"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;

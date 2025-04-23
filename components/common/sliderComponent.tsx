import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ImageSliderProps {
  items: {
    src: string;
    alt: string;
    className : string;
  }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ items }) => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-4 outline-none focus:outline-none">
            <div className={`w-auto mx-auto grayscale-0 opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${item.className}`}>
              <Image
                src={item.src}
                alt={item.alt}
                className="hover:scale-105 object-cover transition-transform duration-500"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider
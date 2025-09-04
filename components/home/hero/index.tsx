"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosPlay } from "react-icons/io";
import Button from "@/components/common/button";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
    img: string;
}

const sliderData: Slide[] = [
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613358/about1_ubg762.avif" },
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about7_ltfy6s.avif" },
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about6_hjfrxl.avif" },
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613650/home1_n7sbcy.avif" },
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about5_gopupi.avif" },
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about7_ltfy6s.avif" },
    { img: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/about6_hjfrxl.avif" },
];

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        beforeChange: (_: number, next: number) => setActiveSlide(next),
    };

    return (
        <section className='bg-primary-floral overflow-hidden z-10 w-full'>
            <div className="container p-5 mx-auto md:ps-10 py-12 md:pt-60 pt-28">
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flex flex-col lg:items-start items-center justify-center lg:mx-0 md:mx-auto lg:max-w-lg' data-aos="fade-up">
                        <h1 className="text-3xl sm:text-5xl font-semibold md:text-6xl text-gray-900 mb-6 lg:text-start text-center">
                            Create & Curate Your Dream <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)]">Interior</span>
                        </h1>
                        <p className="text-base text-gray-500 md:mb-10 md:max-w-lg">
                            We {"don't"} just design spaces - we shape experiences. Every corner is thoughtfully composed to echo your individuality, every texture carefully chosen to harmonize with your mood. This isn’t about conventional luxury; it’s about crafting a home that reflects your signature style. Because true comfort lies in a space that feels unmistakably, authentically {"'you'"}.
                        </p>
                        <div className="flex items-center">
                            <div className="group">
                                <Button
                                    label="Explore Our Projects"
                                    href="/projects"
                                    className="bg-primary-accent hover:bg-black text-white text-sm md:text-base"
                                />
                            </div>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="flex relative uppercase items-center gap-2 left-5 py-2 px-2 mt-3 md:mt-0 rounded-md text-primary-accent font-semibold transition-all duration-300 shrink-0"
                            >
                                {/* Pulse Effect */}
                                <div className="absolute md:left-6 md:w-8 md:h-8 w-5 h-5 left-[18px] rounded-full opacity-100 animate-pulseCustom" />

                                {/* Play Button */}
                                <p className="text-primary-accent md:mr-6 md:h-16 md:w-16 h-10 w-10 border hover:bg-primary-accent hover:text-white bg-white transition-all z-10 border-primary-brown rounded-full flex items-center justify-center">
                                    <IoIosPlay className="md:text-3xl" />
                                </p>
                                <span className="md:text-base text-sm text-black">Watch Tour</span>
                            </button>

                            {/* Custom Pulse Animation */}
                            <style>{`
  @keyframes pulseCustom {
    0% {
      transform: scale(2);
      opacity: 0.6;
      background-color: #255C56;
    }
    50% {
      transform: scale(3);
      opacity: 0.1;
    }
    100% {
      transform: scale(2);
      opacity: 0.6;
    }
  }

  .animate-pulseCustom {
    animation: pulseCustom 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`}</style>

                        </div>
                    </div>
                    <div className='relative md:h-[500px] h-[400px] overflow-hidden lg:-mr-14' data-aos="fade-up" data-aos-delay="300">
                        <Slider {...settings}>
                            {sliderData.map((slide, index) => (
                                <div key={index} className="relative h-[500px]">
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        animate={activeSlide === index ? { scale: 1.5 } : { scale: 1 }}
                                        transition={{ duration: 6, ease: "easeInOut" }}
                                        className="relative h-full w-full"
                                    >
                                        <Image
                                            src={slide.img}
                                            alt={`Slide ${index}`}
                                            className="object-cover"
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Modal (Animated with framer-motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center w-full"
                    >
                        {/* Modal Header */}
                        <div className="text-white lg:w-2/5 md:w-9/12 w-10/12">
                            <div className="text-end bg-rose-20">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <FaTimes size={24} />
                                </button>
                                <div className="w-full h-full">
                                    <iframe
                                        className="w-full h-96 rounded-md"
                                        src="https://www.youtube.com/embed/MLpWrANjFbI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Hero;
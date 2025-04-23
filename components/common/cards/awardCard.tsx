"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  alt: string;
}

const slides: Slide[] = [
  { image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about12_avnmmh.avif", alt: "Living Room Setup" },
  { image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613358/about1_ubg762.avif", alt: "Another Room" },
  { image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about11_utg1pm.avif", alt: "Modern Decor" },
];

const AwardCard: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll

  // Manual navigation functions
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="md:py-10 bg-primary-floral overflow-hidden">
      <div className="container grid md:grid-cols-2 items-center gap-5 px-4 md:px-16 md:py-12">
        {/* Image Slider */}
        <div className="relative md:h-56 h-44 p-1 md:w-5/6 w-11/12 mt-7" data-aos="fade-right">
          <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-gray-100">
            <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              className="absolute w-full h-full "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2,ease: "easeInOut" }}
            >
              <Image
                src={slides[current].image}
                alt={slides[current].alt}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/3 -right-6 bg-primary-accent p-3 rounded-full text-white hover:bg-[#1f4034] transition z-10"
          >
            <MdArrowOutward className="lg:w-10 w-6 lg:h-10 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-[#35695c] w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left lg:px-10 mt-7" data-aos="fade-left">
          <div className="border-l-4 border-[#2c5c4d] pl-8 text-[#5c5c5c] italic text-md mb-10">
            The Interse Winning Award is a symbol of our creative excellence and dedication to quality. This honor reflects the hard work, passion, and innovation we bring to every project.
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <Image
                width={1000}
                height={1000}
                src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744630717/testimonials2_gxef8f.avif"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
                alt="avatar1"
              />
              <Image
                width={1000}
                height={1000}
                src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745043182/a_drflku.jpg"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
                alt="avatar2"
              />
              <Image
                width={1000}
                height={1000}
                src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613366/avatar3_gxvmth.jpg"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
                alt="avatar3"
              />
            </div>
            <span className="text-black">- Designer Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardCard;

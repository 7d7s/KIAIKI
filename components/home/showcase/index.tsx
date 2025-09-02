"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/common/button";

interface Slide {
    image: string;
    alt: string;
}

const slides: Slide[] = [
    { image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about12_avnmmh.avif", alt: "Living Room Setup" },
    { image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613358/about1_ubg762.avif", alt: "Another Room" },
    { image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about11_utg1pm.avif", alt: "Modern Decor" },
];

// Variants for smoother crossfade + slide
const slideVariants = {
    enter: {
        opacity: 0,
        x: 40,
        scale: 0.98,
    },
    center: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // smooth easeOutCubic
        },
    },
    exit: {
        opacity: 0,
        x: -40,
        scale: 0.98,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1], // smooth easeInCubic
        },
    },
};

const Showcase: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="md:py-10 bg-primary-floral overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 items-center gap-5 px-4 md:px-16 md:py-12">
                {/* Image Slider */}
                <div
                    className="relative md:h-56 h-44 p-1 md:w-5/6 w-11/12 mt-7"
                    data-aos="fade-right"
                >
                    <div className="relative w-full h-full overflow-hidden rounded-full">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={current}
                                className="absolute w-full h-full"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                <Image
                                    src={slides[current].image}
                                    alt={slides[current].alt}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover rounded-full"
                                    priority
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
                                className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-[#35695c] w-4" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Text Content */}
                <div
                    className="text-center md:text-left lg:px-10 mt-7 space-y-6"
                    data-aos="fade-left"
                >
                    {/* Heading + Subheading */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
                            Timeless Interiors
                        </h2>
                        <p className="text-[#5c5c5c] leading-relaxed">
                            Crafting interiors that balance <span className="font-semibold text-[#2c5c4d]">elegance</span> and{" "}
                            <span className="font-semibold text-[#2c5c4d]">functionality</span> -
                            designed for modern living, built to last.
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="border-l-4 border-[#2c5c4d] pl-6 text-[#5c5c5c] italic text-sm">
                        A well-designed space is not defined by trends, but by timeless elegance and
                        personal expression.
                    </div>

                    {/* Stats / Highlights */}
                    <div className="grid grid-cols-2 gap-6 md:gap-10 mt-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-[#2c5c4d]">8+</h3>
                            <p className="text-sm text-[#5c5c5c]">Years of Experience</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-[#2c5c4d]">10+</h3>
                            <p className="text-sm text-[#5c5c5c]">Projects Completed</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                        <Button
                            label="Our Projects"
                            href="/projects"
                            className="bg-primary-accent hover:bg-black text-white"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showcase;

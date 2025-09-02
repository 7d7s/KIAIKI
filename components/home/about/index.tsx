import Image from "next/image";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import Button from "@/components/common/button";

const About: React.FC = () => {
    return (
        <div className="bg-white md:pb-12">
            <div className="container px-4 lg:px-16 py-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
                    <Image
                        src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745326051/m_t5f9q4.png"
                        alt="Designer" width={1000} height={1000}
                        className="w-full h-full object-cover"
                    />
                    <div className="flex justify-between items-center flex-col" data-aos="fade-up" data-aos-delay="300">
                        <Image
                            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613357/process1_u2q0wf.avif"
                            alt="Room setup" width={1000} height={1000}
                            className="w-full lg:h-2/4 object-cover"
                        />
                        <Image
                            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613356/about8_dqwkay.avif"
                            alt="Sofa" width={1000} height={1000}
                            className="h-56  md:w-56 md:rounded-full object-cover text-center lg:mt-0 mt-5"
                        />
                    </div>
                </div>

                <div className="lg:px-8 space-y-6">
                    <p
                        className="uppercase text-sm tracking-widest text-primary-accent font-semibold"
                        data-aos="fade-up"
                    >
                        About Interse
                    </p>

                    <h2
                        className="text-3xl md:text-4xl font-medium text-gray-900 leading-snug"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        We Have{" "}
                        <span className="bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] pl-1">
                            8 Years
                        </span>{" "}
                        Of Experience <br /> In Interior Design
                    </h2>

                    <p
                        className="text-gray-600 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        We transform spaces into stunning interiors that blend style,
                        comfort, and timeless elegance beautifully. Our team ensures every
                        detail enhances both functionality and aesthetics.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-7">
                        <div data-aos="fade-up" data-aos-delay="700">
                            <IoLayersOutline className="text-primary-accent text-5xl mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 mb-2">
                                Modern Design
                            </h4>
                            <p className="text-sm text-gray-600">
                                Innovative concepts meet simplicity to create beautiful,
                                functional living spaces.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="900">
                            <FaHandHoldingUsd className="text-primary-accent text-5xl mb-4" />
                            <h4 className="font-semibold text-lg text-gray-800 mb-2">
                                Affordable Price
                            </h4>
                            <p className="text-sm text-gray-600">
                                Budget-friendly packages crafted to make design dreams come
                                true.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div data-aos="fade-up" data-aos-delay="1100">
                        <Button label="Discover More" href="/about-us" className="bg-primary-accent hover:bg-black text-white"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

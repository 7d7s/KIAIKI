"use client"

import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import AwardWinning from '@/components/common/AwardWin'
import DynamicBanner from '@/components/common/banner'
import React from 'react'
import LatestNews from '@/components/home/latestNews'
import ConsultationCTA from '@/components/common/consultationCTA'
import ImageSlider from "@/components/common/sliderComponent";

const sliderImages = [
  {
    src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744952593/Award-1_htohq7.png",
    alt: "Partner logo 1",
    className: "w-[100px]",
  },
  {
    src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744952593/Award-3_b3otgs.png",
    alt: "Partner logo 2",
    className: "w-[100px]",
  },
  {
    src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744952593/Award-4_con35u.png",
    alt: "Partner logo 3",
    className: "w-[100px]",
  },
  {
    src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744952593/Award-1_htohq7.png",
    alt: "Partner logo 4",
    className: "w-[100px]",
  },
];

function page() {
  return (
    <div>
      <DynamicBanner
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/aboutbanner_scvogx.avif"
        altText="About Banner"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" }
        ]}
        title="About Us"
      />

      {/* About Section */}
      <div className="bg-white pb-12">
        <div className="container px-4 md:px-8 py-10 md:py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Image + Quote */}
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614421/man_hkwy35.avif"
              alt="Designer"
              width={1000}
              height={1000}
              className="w-full max-h-[550px] object-cover rounded-xl shadow"
            />
            <div className="absolute bottom-0 md:-bottom-6 right-0 md:-right-6 w-72 p-5 bg-primary-accent rounded-xl shadow-lg text-white">
              <div className="relative">
                <p className="italic leading-relaxed">
                  “At KIAIKI, creativity meets comfort. With over 8+ years of expertise, we craft spaces that are personal in essence, purposeful in design, and timeless in appeal.”</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:px-8 space-y-6">
            <p className="uppercase text-sm tracking-widest text-primary-accent font-semibold">
              About KIAIKI
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              We Have{" "}
              <span className="bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] pl-1">
                8+ Years
              </span>{" "}
              Of Experience <br /> In Interior Design
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We transform spaces into stunning interiors that blend style,
              comfort, and timeless elegance beautifully. Our team ensures every
              detail enhances both functionality and aesthetics.
            </p>

            {/* Mission + Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-7">
              <div className="p-4 rounded-lg hover:shadow transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-full bg-primary-accent/10">
                    <GiBullseye className="text-primary-accent text-3xl" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">Our Mission</h4>
                </div>
                <p className="text-sm text-gray-600">
                  To craft meaningful spaces that inspire comfort, joy, and timeless value.
                </p>
              </div>
              <div className="p-4 rounded-lg hover:shadow transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-full bg-primary-accent/10">
                    <FaEye className="text-primary-accent text-3xl" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">Our Vision</h4>
                </div>
                <p className="text-sm text-gray-600">
                  To become a global leader in interior design, known for elegance and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col border-t pt-4 md:flex-row md:items-center justify-between gap-2">
              <ImageSlider items={sliderImages} />
            </div>
          </div>
        </div>
      </div>

      <AwardWinning />
      {/* <Team /> */}
      <LatestNews />
      <ConsultationCTA />
    </div>
  )
}

export default page

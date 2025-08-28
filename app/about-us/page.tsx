"use client"

import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { RxQuote } from "react-icons/rx";
import AwardWinning from '@/components/common/AwardWin'
import DynamicBanner from '@/components/common/banner'
import Team from '@/components/common/team'
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
        ]} title="About Us"
      />
      <div className="bg-white pb-12">
        <div className="container px-4 lg:px-16 py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614421/man_hkwy35.avif"
              alt="Designer" width={1000} height={1000}
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute -bottom-4 w-72 right-5 p-5 bg-primary-accent z-10 text-white">
              <div className="relative">
                Interse is where creativity meets comfort. With 25+ years of expertise, we design spaces that feel personal, purposeful, and timeless.
                <h6 className="my-5 font-bold text-lg">-Rajeev Kumar</h6>
                <div className="absolute -bottom-12 -right-4 opacity-40">
                  <RxQuote className="text-8xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-8">
            <p className="uppercase text-sm tracking-widest text-primary-accent font-semibold">
              About Interse
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 my-5">
              We Have 25 Years Of <br />
              <span className="text-black pl-2 bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)]" > Experience</span> In Interior Design
            </h2>
            <p className="text-gray-500 mb-6">
              We transform spaces into stunning interiors that blend style, comfort, and timeless elegance beautifully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-7">
              <div className="">
                <div className="mb-2">
                  <GiBullseye className="text-primary-accent text-5xl mb-5" />
                  <h4 className="font-semibold text-lg text-gray-800">Our Mission</h4>
                </div>
                <p className="text-sm text-gray-600">To be the go-to name in elegant interior design.</p>
              </div>
              <div className="">
                <div className="mb-2">
                  <FaEye className="text-primary-accent text-5xl mb-5" />
                  <h4 className="font-semibold text-lg text-gray-800">Our Vision</h4>
                </div>
                <p className="text-sm text-gray-600">To be the go-to name in elegant interior design.</p>
              </div>
            </div>

            <div className="flex flex-col border-t pt-4 md:flex-row md:items-center justify-between gap-2">
              <ImageSlider items={sliderImages} />
            </div>
          </div>
        </div>
      </div>
      <AwardWinning />
      <Team />
      <LatestNews />
      <ConsultationCTA />
    </div>
  )
}

export default page

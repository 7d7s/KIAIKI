"use client";
import { useState } from "react";
import Image from 'next/image'
import React from 'react'
import { IoIosPlay } from 'react-icons/io'
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const AwardWinning: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="bg-white">
        <div className='relative'>
          <Image 
            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about12_avnmmh.avif" 
            alt='background' 
            className='w-full md:h-auto h-[400px]' 
            width={1000} 
            height={1000} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-85 transition-all duration-300 flex items-center justify-center"></div>
          
          <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5 absolute z-10 top-0 left-1/2 transform -translate-x-1/2 text-white">
            <div className="mt-10">
              <div className='flex items-center justify-center text-center flex-col'>
                <p className="text-sm tracking-widest text-primary-givry uppercase">
                  Winning Award
                </p>
                <h2 className="text-3xl font-bold mt-5">
                  We Are Committed To Take Care Of Clients Seriously
                </h2>
                <p className="mt-5 text-gray-50 max-w-xl">
                  {"We're"} proud to receive the Interse Winning Award — a recognition of the ideas, design, and effort that shape our standout work and inspire future creations.
                </p>
              </div>
            </div>
            
            {/* Centered Image Container */}
            <div className='lg:flex justify-center mt-8 hidden'>
              <div className='relative w-full max-w-4xl'>
                <Image 
                  src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883436/Interior3_iyclnw.avif" 
                  alt='interior design' 
                  className='w-full h-[500px] object-cover' 
                  width={1000} 
                  height={1000} 
                />
                
                <div className='absolute bottom-0  left-0 text-black flex'>
                <button
                          onClick={() => setIsOpen(true)}
                          className="hidden md:flex relative items-end left-0 text-primary-accent font-semibold transition-all duration-300"
                        >
                      
                          <p className="text-white mr-6 h-28 w-28 hover:bg-white hover:text-black bg-primary-accent transition-all z-10 border-primary-brown flex items-center justify-center">
                            <IoIosPlay size={40} />
                          </p>
                        </button>
                  <div className='flex items-center justify-between bg-white p-5' >
                    <div className='ml-3'>
                      <h6 className='text-xl'>Watch Video</h6>
                      <p className='text-gray-600'>Best Living Room Design</p>
                    </div>
                  </div>
                 
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
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center"
          >
            {/* Modal Header */}
            <div className="text-white md:w-3/5 h-3/6">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardWinning
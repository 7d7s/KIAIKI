"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Clinics', 'Hospitals', 'Home Interiors'];

const images = [

  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883436/Interior3_iyclnw.avif', category: 'Clinics', room: 'Clinics' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883436/interior2_pppboh.jpg', category: 'Hospitals', room: 'Hospitals' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883861/interior4_gpfgb0.avif', category: 'Home Interiors', room: 'Home Interiors' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884187/Living_Room_j0keey.png', category: 'Clinics', room: 'Clinics' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884656/Bathroom2_wa3hgs.avif', category: 'Clinics', room: 'Clinics' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about12_avnmmh.avif', category: 'Clinics', room: 'Clinics' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884187/Living_Room1_ocqtd8.png', category: 'Clinics', room: 'Clinics' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884656/Bathroom_xitjbz.jpg', category: 'Clinics', room: 'Hospitals' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883436/Interior1_snzcrm.avif', category: 'Home Interiors', room: 'Home Interiors' },
  { src: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884925/Bathroom3_s0flmh.avif', category: 'Home Interiors', room: 'Home Interiors' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className=" bg-white text-black">
      <div className="container mx-auto px-4 py-5">
        <div className="mt-10 text-center flex items-center flex-col justify-center">
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 border-2 text-sm font-semibold ${selectedCategory === cat
                    ? 'bg-primary-accent text-white border-primary-accent'
                    : 'bg-white text-black hover:text-white border-primary-accent hover:bg-primary-accent'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 lg:gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={`${img.category}-${index}`}
                  className="relative overflow-hidden group mb-5 lg:mb-8 break-inside-avoid"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  layout
                >
                  <motion.img
                    src={img.src}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay with Category */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <motion.span
                      className="text-white text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      {img.room}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
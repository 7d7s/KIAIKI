"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/button';

export default function NotFoundPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-start justify-center text-center text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744693738/ConsultationSection_e8salw.avif" alt=' ' height={1000} width={1000}
       className='z-0 absolute  w-full h-full object-cover'/>
      
      <div className="absolute inset-0 bg-black/50 top-0 bottom-0"></div>


      {/* Content with staggered animations */}
      <motion.div 
        className="relative z-10 max-w-lg p-10"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-white"
          variants={itemVariants}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl font-semibold mb-6"
          variants={itemVariants}
        >
          Frame Not Found
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 mb-8"
          variants={itemVariants}
        >
          The shot{" you're"} looking for seems to be out of focus. 
          Maybe it was cropped or never developed. {"Let's"} find you 
          a better angle.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
          <Button
           href="/"
           label="Back To Home"
           className = "bg-primary-accent text-sm hover:bg-black hover:text-white mb-3 text-white"
           />
          </motion.div>
        </motion.div>
      </motion.div>
      

    
    </motion.div>
  );
}
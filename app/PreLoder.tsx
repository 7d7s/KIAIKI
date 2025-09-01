'use client';

import React from "react";
import { motion } from "framer-motion";

interface CircleLoaderProps {
  brandName?: string;
  size?: number;
}

export default function PreLoader({
  brandName = "KIAIKI",
  size = 120,
}: CircleLoaderProps) {
  const dots = Array.from({ length: 7 });

  const radius = size / 3;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Circles orbit */}
      <div className="relative w-[140px] h-[140px] mb-4">
        {dots.map((_, i) => {
          const angle = (i / dots.length) * Math.PI * 2;
          return (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-primary-accent"
              style={{
                top: `${50 + radius * Math.sin(angle)}px`,
                left: `${50 + radius * Math.cos(angle)}px`,
                marginTop: '10px',
                marginLeft: '10px',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Brand Text */}
      <motion.div
        className="text-xl font-light tracking-widest"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        {brandName}
      </motion.div>

      {/* Subtext */}
      <motion.p
        className="mt-3 text-sm text-neutral-500"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
      >
        Loading Experience…
      </motion.p>
    </div>
  );
}
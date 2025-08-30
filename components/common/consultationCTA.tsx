import Image from "next/image";
import React from "react";
import Button from "./button";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="relative h-[500px] bg-slate-900 text-white">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744693738/ConsultationSection_e8salw.avif"
        alt="Modern consultation room with seating"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div
        className="absolute inset-0 container mx-auto flex items-center justify-center lg:justify-start px-4 lg:px-16"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Have A Question? <br className="hidden sm:block" />
            <span className="text-primary">Start Consultation Now</span>
          </h2>

          <p className="mt-6 max-w-md mx-auto lg:mx-0 text-gray-200">
            Have questions or need expert advice? Our team is here to help. Get personalized consultation today and take the first step toward solutions that work best for you.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
              label="Contact Us"
              href="tel:+918800007740"
              className="bg-primary-accent hover:bg-black text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;

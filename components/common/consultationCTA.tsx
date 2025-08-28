import Image from 'next/image';
import React from 'react';
import Button from './button';

const ConsultationCTA: React.FC = () => {
  return (
    <section className=" bg-white text-black">
      <div className="relative bg-slate-900">
        <Image
          src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744693738/ConsultationSection_e8salw.avif"
          alt="Consultation Room" width={1000} height={1000}
          className="w-full h-[500px] object-cover"
        />
        <div className="container mx-auto px-4 lg:px-24 py-5 absolute z-10 h-[500px] flex items-center md:justify-start justify-center  top-0" data-aos="fade-up">
          <div className=" w-full lg:w-1/2 ">
            <div className=" text-center lg:text-left mb-10 text-white lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
                Have A Question? <br className="hidden sm:block" />
                <span className="text-primary">Start Consultation Now</span>
              </h2>
              <p className="mt-6 max-w-md mx-auto lg:mx-0">
                Have questions or need expert advice? Our team is here to help. Get personalized consultation today and take the first step toward solutions that work best for you.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start items-center">
                <Button label="Contact Us"
                  href="tel:+918800007740"
                  className="bg-primary-accent hover:bg-black text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ConsultationCTA;

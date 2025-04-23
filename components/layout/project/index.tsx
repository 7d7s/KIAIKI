import React from "react";
import Gallery from '@/components/common/cards/galleryCard'
const Project: React.FC = () => {
  return (
    <>
      <section className=" bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5">
          <div className="mt-10 text-center flex items-center justify-center">
            <div>
              <p className="text-sm tracking-widest text-primary-accent uppercase">
                Our Projects
              </p>
              <h2 className="text-3xl font-bold mt-5">
              Check Our 
                <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2">
                Latest 
                </span> Projects
              </h2>
              <p className="mt-5 text-gray-500 max-w-xl">
              Peek into our latest design journeys! {"We’ve"} been busy turning blank spaces into wow-worthy corners  and {"here’s"} the proof.
              </p>
            </div>
          </div>
             <Gallery/>
        </div>
      </section>
    </>
  );
};

export default Project;

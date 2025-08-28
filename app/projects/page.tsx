
import AwardWinning from '@/components/common/AwardWin/index'
import DynamicBanner from '@/components/common/banner'
import Process from '@/components/home/process'
import WhyChooseUs from '@/components/home/whychooseus'
import React from 'react'
import Gallery from '@/components/common/cards/galleryCard'
import ConsultationCTA from '@/components/common/consultationCTA'
const Projects= () => {
  return (
    <>
      <DynamicBanner
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220874/details_pgtyvp.avif"
        altText="About Banner"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Project ", href: "/project" }
        ]} title="Our Project"
      />
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
          <Gallery />
        </div>
      </section>
      <AwardWinning />
      <Process />
      <WhyChooseUs />
      <ConsultationCTA/>
    </>
  )
}

export default Projects

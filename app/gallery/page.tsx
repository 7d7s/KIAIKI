import DynamicBanner from '@/components/common/banner'
import ConsultationCTA from '@/components/common/consultationCTA'
import Faq from '@/components/common/faq'
import React from 'react'
import Gallery from '@/components/common/cards/galleryCard'

function page() {
  return (
    <>
      <DynamicBanner
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/servicsbanner_xlpyji.avif"
        altText="About Banner"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" }
        ]} title="Our Gallery"
      />
      <section className=" bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5">
          <div className="mt-10 text-center flex items-center justify-center">
            <div>
              <p className="text-sm tracking-widest text-primary-accent uppercase">
                Our Gallery
              </p>
              <h2 className="text-3xl font-bold mt-5">
                Check Our
                <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2">
                  Latest
                </span> Gallery
              </h2>
              <p className="mt-5 text-gray-500 max-w-xl">
                Peek into our latest design journeys! {"We’ve"} been busy turning blank spaces into wow-worthy corners  and {"here’s"} the proof.
              </p>
            </div>
          </div>
          <Gallery />
        </div>
      </section>
      <Faq />
      <ConsultationCTA />
    </>
  )
}

export default page

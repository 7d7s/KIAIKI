
import AwardWinning from '@/components/common/AwardWin/index'
import DynamicBanner from '@/components/common/banner'
import Process from '@/components/home/process'
import WhyChooseUs from '@/components/home/whychooseus'
import React from 'react'
import ConsultationCTA from '@/components/common/consultationCTA'
import Image from 'next/image'
import { FaClinicMedical, FaHome } from 'react-icons/fa'
import { MdOutlineLocalHospital, MdOutlineMeetingRoom } from 'react-icons/md'
const Projects = () => {
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
      <section className='bg-primary-floral text-gray-800 border-b'>
        <div className='container mx-auto px-4 lg:px-16 py-12'>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className='md:pr-10' data-aos="fade-up">
              <div className="sticky top-10">
                <p className="text-primary-accent uppercase tracking-widest font-medium text-sm mb-2">
                  Our Projects
                </p>
                <h2 className="text-3xl md:text-4xl leading-tight my-4">
                  We <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2"> Provide </span> Specialized Interior Design Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our expertise extends across healthcare and residential spaces. From clinics and hospitals to chambers and home interiors, we design environments that blend functionality with style, ensuring comfort and efficiency in every detail.
                </p>

                <div className='relative mt-10'>
                  <Image
                    src="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798297/home4_zpgfob.jpg"
                    alt='Clinics Interior'
                    width={1000}
                    height={1000}
                  />
                  <div className='absolute bottom-0 left-0 p-5 bg-white'>
                    <div className='flex items-center justify-between'>
                      <FaClinicMedical className='text-3xl' />
                      <div className='ml-3'>
                        <h6 className='text-xl font-semibold'>Clinics</h6>
                        <p className='text-gray-600'>Functional, calming, patient-focused spaces.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className='space-y-10'>
              {/* Hospitals */}
              <div className='relative' data-aos="fade-up">
                <Image
                  src="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798530/hospital1_urosda.jpg"
                  alt='Hospital Interior'
                  width={1000}
                  height={1000}
                />
                <div className='absolute bottom-0 left-0 p-5 bg-white'>
                  <div className='flex items-center justify-between'>
                    <MdOutlineLocalHospital className='text-4xl' />
                    <div className='ml-3'>
                      <h6 className='text-xl font-semibold'>Hospitals</h6>
                      <p className='text-gray-600'>Safe, efficient, and healing-focused designs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chambers */}
              <div className='relative' data-aos="fade-up">
                <Image
                  src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613359/Interior3_lsbhol.avif"
                  alt='Chambers Interior'
                  width={1000}
                  height={1000}
                />
                <div className='absolute bottom-0 left-0 p-5 bg-white'>
                  <div className='flex items-center justify-between'>
                    <MdOutlineMeetingRoom className='text-3xl' />
                    <div className='ml-3'>
                      <h6 className='text-xl font-semibold'>Chambers</h6>
                      <p className='text-gray-600'>Professional, elegant, and efficient workspaces.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Interiors */}
              <div className='relative' data-aos="fade-up">
                <Image
                  src="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798297/home2_q6kea8.jpg"
                  alt='Home Interiors'
                  width={1000}
                  height={1000}
                />
                <div className='absolute bottom-0 left-0 p-5 bg-white'>
                  <div className='flex items-center justify-between'>
                    <FaHome className='text-3xl' />
                    <div className='ml-3'>
                      <h6 className='text-xl font-semibold'>Home Interiors</h6>
                      <p className='text-gray-600'>Personalized spaces that reflect your lifestyle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AwardWinning />
      <Process />
      <WhyChooseUs />
      <ConsultationCTA />
    </>
  )
}

export default Projects

import React from 'react'
import Button from '@/components/common/button'
import Image from 'next/image'
import { GiFurnace } from 'react-icons/gi'
import { FaPencilRuler } from 'react-icons/fa'
import { MdOutlineInterests } from 'react-icons/md'

const Services: React.FC = () => {
  return (
    <>
      <section className='bg-primary-floral text-black border-b'>
        <div className='container mx-auto px-4 lg:px-16 py-12'>
        <div className="grid md:grid-cols-2 gap-10">
            <div className='md:pr-10' data-aos="fade-up">
            <div className="sticky top-10">
            <p className="text-primary-accent uppercase tracking-widest font-medium text-sm mb-2">
            Services
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight my-4">
            We  <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2"> Provide </span> the Best Interior Design Services For You
               
            </h2>
            <p className="text-gray-600 mb-6">
            We specialize in creating stunning and functional interior spaces tailored to your style. Our expert team delivers top-notch design solutions that enhance comfort, beauty, and value to your home.
            </p>
            <Button  label="All Services"
    href="#"
    className="bg-primary-accent hover:bg-black text-white"
    />

<div className='relative mt-10'>
                    <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613360/Interior_odx5cz.avif" alt='photo' width={1000} height={1000}
                    className=''/>
                    <div className='absolute bottom-0 left-0 p-5 bg-white'>
                        <div className='flex items-center justify-between'>
<MdOutlineInterests className='text-3xl'/>
                        <div className='ml-3'>
                            <h6 className='text-xl'>Interior  Design</h6>
                            <p className='text-gray-600'>Style meets comfort.</p>
                        </div>
                        </div>
                    </div>
                </div>
          </div>
            </div>
            
            <div className=' space-y-10'>
                <div className='relative' data-aos="fade-up">
                    <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613356/process4_psmuyu.avif" alt='photo' width={1000} height={1000}
                    className=''/>
                    <div className='absolute bottom-0 left-0 p-5 bg-white'>
                        <div className='flex items-center justify-between'>
<GiFurnace className='text-5xl'/>
                        <div className='ml-3'>
                            <h6 className='text-xl'>Furniture Design</h6>
                            <p className='text-gray-600'>Built for you.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='relative' data-aos="fade-up">
                    <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613359/Interior3_lsbhol.avif" alt='photo' width={1000} height={1000}
                    className=''/>
                    <div className='absolute bottom-0 left-0 p-5 bg-white'>
                        <div className='flex items-center justify-between'>
<FaPencilRuler className='text-3xl'/>
                        <div className='ml-3'>
                            <h6 className='text-xl'>Design Plan</h6>
                            <p className='text-gray-600'>Smart layout. Perfect fit.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
      </section>
    </>
  )
}

export default Services
